angular
    .module('starter.controllers', [])


    .controller('HomeCtrl', function($scope) {
        $scope.Auth = function(){
            $state.go('auth');
        };
        $scope.Main = function(){
            $state.go('main.search');
        };
    })

    .controller('AuthCtrl', function($scope,$state) {

    })

    .controller('MainCtrl', function($scope,$state) {
        $scope.Search = function(){
            $state.go('main.search');
        };
    })

    .controller('SearchCtrl', function($scope) {
        $scope.Search = function(){
            $state.go('main.tag');
        };
    })

    .controller('TagCtrl', function($scope,$stateParams) {
        $scope.tagData = TagDataMap[$stateParams.tag];
        console.log($scope.tagData);
    });
