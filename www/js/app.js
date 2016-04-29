angular
    .module('starter', ['ionic','starter.controllers'])
    .run(function($ionicPlatform) {

        $ionicPlatform.ready(function() {
          if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
          }
          if(window.StatusBar) {
            StatusBar.styleDefault();
          }
        });

    })
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('home', {
            url: '/home',
            views:{
                'frame':{
                    templateUrl: 'frame/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

        .state('auth', {
            url: '/auth',
            views:{
                'frame':{
                    templateUrl: 'frame/auth.html',
                    controller: 'AuthCtrl'
                }
            }
        })

        .state('main', {
            url: '/main',
            abstract: true,
            views:{
                'frame':{
                    templateUrl: 'frame/main.html',
                    controller: 'MainCtrl'
                }
            }
        })

        .state('main.search', {
            url: '/search',
            views: {
                'content': {
                    templateUrl: 'content/page-search.html',
                    controller: 'SearchCtrl'
                }
            }
        })

        .state('main.tag', {
            url: '/tag/:tag',
            views: {
                'content': {
                    templateUrl: 'content/page-tag.html',
                    controller: 'TagCtrl'
                }
            }
        });

        $urlRouterProvider.otherwise('/home');

    });

