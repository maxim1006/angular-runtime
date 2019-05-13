import {
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'app-button-element',
    templateUrl: './button-element.component.html',
    styleUrls: ['./button-element.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ButtonElementComponent implements OnChanges {

    @HostBinding('class.app-button-element')
    public hostClass = true;


    @Output()
    public appButtonClick: EventEmitter<any> = new EventEmitter();


    @Input()
    public text: string;

    @Input()
    public type: string;

    @Input()
    public styleClass: string;

    @HostBinding('class._loading')
    @Input()
    public isLoading: boolean;

    @Input()
    public objectInput: any;


    @ContentChild('custom') customLoader: ElementRef;


    public state = {
        text: '',
        type: 'button',
        styleClass: 'default',
        isLoading: false
    };


    @HostListener('click', ['$event'])
    public _click = (event: Event) => {
        this.appButtonClick.emit({
            event,
            state: this.state
        });
    };


    constructor(public cdr: ChangeDetectorRef) {
    }

    public ngOnChanges(changes: SimpleChanges) {
        Object.entries(changes).forEach(([key, value]) => {
            if (key === 'objectInput') {
                value.currentValue = JSON.parse(value.currentValue);
            }

            this.setState({[key]: value.currentValue});
        });
    }

    private setState(newState) {
        this.state = {...this.state, ...newState};
        this.cdr.detectChanges();
    }
}
