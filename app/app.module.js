import angular from 'angular'
import uirouter from 'angular-ui-router'
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


angular.module('movieRecomended', [uirouter, localstorage, angularchart])
    .config(routes)
    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://www.myapifilms.com/**'
        ])
    })
    .config(function(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('movieRecomended')
            .setStorageType('sessionStorage')
            .setNotify(true, true)
    })
    .controller('mainController', mainController)
    .controller('likedController', likedController)
    .controller('chartController', chartController)
    .directive('liked', () => new likedDirective())
    .component('movieHeader', movieHeader)
    .service('dataService', dataService)
    .service('storageService', storageService)
    .service('chartService', chartService)
