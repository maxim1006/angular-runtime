Ng new angular-runtime


Create lazy module проверяем

npm install @herodevs/lazy-af (или ngx-loadable)
Создаю router free lazy module и компонент и ссылку проверяем


"buildServer": "cd ./dist/angular-runtime && ws --spa index.html --compress --open --static.maxage -1",
npm i local-web-server


Усложняем задачу много разных команд которые что-то пилят в своей песочнице…

Самое простое это создать приложение через обычное ng new your_awesome-project, а затем поделиться с другой командой истходниками ваших замечательных модулей/компонент (к примеру через приватный нпм или гит вашей компании). Проект которому нужен ваш модуль сделает следующее:

в tsconfig.ts
«Include»: [
    "node_modules/path_to_another_team_package/**/*»
]

И появится возможность как обычно испортить все ресурсы + дебажить + добавлять только то что нужно вам

Минусы - это все ts и не аот, импорты которые учитываются при переборках, а хочется просто подключить скрипт и не думать

Пример с бандлом:
Angular-elements-bundle
Ng g application angular-elements-bundle
ng add @angular/elements --project=angular-elements-bundle


Пример с library:

Для этого воспользуемся командой ng g library library-template (не забываем вызывать эту команду в рутовой папке проекта), самое классное, что все уже готово (структура файлов) и можно сразу начать разработку, затем билдим этот проект: ng build library-template и в dist/library-template/bundles/library-template.umd.js лежит umd модуль который в жизни вы будете выкачивать из нпм, а в статье положим его в assets и сделаем ссылку из нашего апп модуля: import {LibraryTemplateModule} from ‘library-template'; (в жизни node_modules/library-template) А также Лейзи модуль - враппер для наглядности импорта из library.

Заметим, что теперь у нас есть .umd.js файл который вы можете скомпилировать вышеуказанным образом из любого проекта, получается почти рантайм)

Небольшое отступление
Если хотите разрабатывать и лайбрери и сразу использовать в приложении то надо при этом в tsconfig надо поменять paths:  "paths": {
  "library-template": [
    "projects/library-template/src/public_api",
    "projects/library-template/public_api"
  ],
  "library-template/*": [
    "projects/library-template/src/public_api",
    "projects/library-template/src/public_api"
  ]
}

В примере оставил для удобства билд сразу и лайбрери и проекта


Теперь самое интересное: Уметь лезийно или из библиотеки подтягивать модули это здорово, но что было бы еще лучше так это в любом месте нашего апп написать произвольный Тег кастомного элемента (причем не только в ангулар template а также в index.html) да так чтобы наше приложение кроме этого кастомного тега никак не было связано с произвольным скриптом (никаких импортов в ts) мы сами можем когда нам захочется прописать <script src=«»> в index.html где угодно в нашем приложении вставить Тег веб компонента и ангулар должен на лету подхватить компонент. Ровно также или еще лучше чем в реакт/vue

Реализовать это можно используя angular-elements, aka webcomponents
Последовательность такая: 

Создадим еще проект: ng g application angular-element-template

убираем из нашего приложения все лишние импорты: npm I ngx-build-plus (для кастомизации вебпака)

Ну а дальше создадим папку helpers в корне с файлами для копирования .umd.js и папку helpers в angular-element-template куда положим webpack.extra.js файл в котором отмечены модули не нужные в финальном банде и пару хелперов для копирования .umd.js ресурсов

Также установим
 npm i @angular/elements

Npm I copy —SD

В angular.json поменяем  ngx-build-plus:build для билдера angular-element-template
И добавим в package.json новую команду

"buildAE": "node helpers/copy-bundles.js && node helpers/copy-wc-polyfill.js && ng build angular-element-template --prod --extraWebpackConfig ./helpers/webpack.extra.js --output-hashing none --single-bundle true",
, разберем ее…

Запустим, получим main.js

Создадим проект для использования элементов
ng g application external-angular-elements

И добавим в index.html все что нам нужно для external подключения angular elements

Создадим папку external-angular-elements 

Добавим туда  app-button-element.js а также создадим подходящий index.html (со всеми external ресурсами) и добавим <script src="./assets/external-angular-elements/app-button-element.js"></script>

(оставил в примерах:
 custom event example
set property example
Dynamic angular element creation example
complex input with objectInput example
)

Для того чтобы ангулар приложение не ругалось на неизвестные элементы
schemas: [CUSTOM_ELEMENTS_SCHEMA]









