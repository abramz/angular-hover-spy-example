'use strict';

angular.module('angular-hover-spy-example', [
  'ngSanitize',
  'ui.bootstrap',
  'ui.router',
  'abramz.hoverSpy'
])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          views: {
            'toggle': {
              templateUrl: 'views/toggle-example.tpl.html'
            },
            'table@toggle': {
              templateUrl: 'views/toggle-example-table.tpl.html'
            },
            'onoff': {
              templateUrl: 'views/onoff-example.tpl.html'
            },
            'nowyouseeme@onoff': {
              templateUrl: 'views/nowyouseeme.tpl.html'
            },
            'customHandler': {
              templateUrl: 'views/custom-handler-example.tpl.html',
              controller: 'CustomHandlerExampleCtrl'
            },
            'listener@customHandler': {
              templateUrl: 'views/listener.tpl.html'
            }
          }
        });
    }
  ]);
