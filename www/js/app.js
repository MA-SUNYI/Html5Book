angular
    .module('starter', ['ionic','starter.controllers'])
    .run(function($ionicPlatform) {

        $ionicPlatform.ready(function() {
          if(window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
          }
          if(window.StatusBar) {
            StatusBar.styleDefault();
          }
        });

    })
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('auth', {
            url: '/auth',
            abstract: true,
            templateUrl: 'frame/auth.html',
            controller: 'AuthCtrl'
        })

        .state('main', {
            url: '/main',
            abstract: true,
            templateUrl: 'frame/main.html',
            controller: 'MainCtrl'
        })

        .state('main.home', {
            url: '/home',
            templateUrl: 'content/page-home.html',
            controller: 'HomeCtrl'
        })

        .state('main.search', {
          url: '/search',
          templateUrl: 'content/page-search.html',
          controller: 'SearchCtrl'
        })

        .state('main.tag', {
            url: '/tag/:tag',
            templateUrl: 'content/page-tag.html',
            controller: 'TagCtrl'
        });

        $urlRouterProvider.otherwise('/main/home');

    });

