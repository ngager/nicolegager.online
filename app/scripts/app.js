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
                                templateUrl: 'views/header.html',
                                controller: 'IndexController'
                            },
                            'content': {
                                templateUrl: 'views/about.html',
                                controller: 'IndexController'
                            },
                            'footer': {
                                templateUrl: 'views/footer.html'
                            }
                        }
                    }
                )
                .state(
                    'app.about', {
                        url: 'about',
                        views: {
                            'content@': {
                                templateUrl: 'views/about.html'
                            }
                        }
                    }
                )
                .state(
                    'app.resume', {
                        url: 'resume',
                        views: {
                            'content@': {
                                templateUrl: 'views/resume.html'
                            }
                        }
                    }
                )
                .state(
                    'app.portfolio', {
                        url: 'portfolio',
                        views: {
                            'content@': {
                                templateUrl: 'views/portfolio.html'
                            }
                        }
                    }
                )
                .state(
                    'app.studies', {
                        url: 'studies',
                        views: {
                            'content@': {
                                templateUrl: 'views/studies.html'
                            }
                        }
                    }
                )
                .state(
                    'app.contact', {
                        url: 'contact',
                        views: {
                            'content@': {
                                templateUrl: 'views/contact.html'
                            }
                        }
                    }
                );
            $urlRouterProvider.otherwise('/');
        }
    );

