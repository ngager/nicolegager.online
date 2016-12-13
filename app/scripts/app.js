/**
 * Created by nicolegager on 12/13/16.
 */

'use strict';
angular.module('nicolegager', ['ui.router'])
    .config(
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state(
                    'app', {
                        url: '/',
                        views: {
                            'header': {
                                templateUrl: 'views/header.html'
                            },
                            'content': {
                                templateUrl: 'views/home.html',
                                controller: 'IndexController'
                            }
                        }
                    }
                );
            $urlRouterProvider.otherwise('/');
        }
    );