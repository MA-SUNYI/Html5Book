angular
    .module('starter.controllers', [])

    .controller('MainCtrl', function($scope,$state) {
        $scope.Search = function(){
            $state.go('main.tag');
        };

        $scope.Home = function(){
          $state.go('main.home');
        };
        $scope.Card = function(){
          $state.go('main.tag');
        }
    })

    .controller('HomeCtrl', function($scope) {

    })

    .controller('SearchCtrl', function($scope) {

    })

    .controller('TagCtrl', function($scope,$stateParams) {
        $scope.tagData = TagDataMap[$stateParams.tag];
        console.log($scope.tagData);
    });
