import {Component} from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    angular = {
        title: 'Angular',
        subtitle: 'Фреймворк',
        content: `открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript,
      разрабатываемая командой из компании Google, а также сообществом разработчиков из различных компаний.
      Angular — полностью переписанный фреймворк от той же команды, которая написала AngularJS.`,
        img: 'https://learn.javascript.ru/courses/list/angular.svg',
    };

    react = {
        title: 'React',
        subtitle: 'Фреймворк',
        content: `JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
      React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.
      React может использоваться для разработки одностраничных и мобильных приложений.`,
        img: 'https://learn.javascript.ru/courses/list/react.svg',
    };

    vue = {
        title: 'Vue.js',
        subtitle: 'Фреймворк',
        content: `JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов.
      Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать
      как веб-фреймворк для разработки одностраничных приложений в реактивном стиле. Является третьим
      по величине проектом в истории GitHub.`,
        img: 'https://learn.javascript.ru/courses/list/vue.svg',
    };
}
