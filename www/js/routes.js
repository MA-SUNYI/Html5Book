angular.module('H5App.routes', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('main', {
            url: '/main',
            title: '首页',
            templateUrl: 'app/main.html',
            controller: 'MainCtrl'
        })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/main');
    });