import angular from 'angular'
import uirouter from '@uirouter/angularjs'
import animate from 'angular-animate'
import Chart from 'chart.js';
import angularchart from 'angular-chart.js'
import localstorage from 'angular-local-storage'

import routes from './app.routes'
import mainController from './controllers/main.controller.js'
import likedController from './controllers/liked.controller.js'
import chartController from './controllers/chart.controller.js'
import likedDirective from './directives/liked.directive.js'
import { movieHeader } from './components/header.js'
import dataService from './services/dataService.js'
import storageService from './services/storageService.js'
import chartService from './services/chartService.js'

import './styles/all.scss';

angular.module('movieRecomended', [uirouter, animate, localstorage, angularchart])
    .config(routes)
    .config(delegateProvider)
    .config(torageServiceProvider)
    .controller('mainController', mainController)
    .controller('likedController', likedController)
    .controller('chartController', chartController)
    .directive('liked', () => new likedDirective())
    .component('movieHeader', movieHeader)
    .service('dataService', dataService)
    .service('storageService', storageService)
    .service('chartService', chartService)

function delegateProvider($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://www.myapifilms.com/**'
    ])
}

function torageServiceProvider(localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('movieRecomended')
        .setStorageType('sessionStorage')
        .setNotify(true, true)
}
