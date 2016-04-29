angular
    .module('starter.controllers', [])


    .controller('HomeCtrl', function($scope,$state) {
        $scope.Auth = function(){
            $state.go('auth');
        };

        $scope.Tag = function(tag){
            $state.go('main.tag',{ tag : tag });
        };

        $scope.Search = function(){
            $state.go('main.search');
        };
    })

    .controller('AuthCtrl', function($scope,$state) {
        $scope.Home = function(){
            $state.go('home');
        };
    })

    .controller('MainCtrl', function($scope,$state) {
        $scope.Search = function(){
            $state.go('main.search');
        };
    })

    .controller('SearchCtrl', function($scope,$state) {
        $scope.Search = function(){
            $state.go('main.tag');
        };
    })

    .controller('TagCtrl', function($scope,$stateParams) {
        $scope.tagData = TagDataMap[$stateParams.tag];
        console.log($scope.tagData);
    });
