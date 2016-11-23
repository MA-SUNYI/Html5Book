angular.module('H5App.api', [])

.factory('Api', function($http, $q, $ionicLoading, $ionicPopup) {

    var HttpHandle = function(url, json) {
        var q = $q.defer();

        $ionicLoading.show();

        $http.post(url, json)
            .success(function(data) {
                q.resolve(data);
                $ionicLoading.hide();
            })
            .error(function(error) {
                q.reject(error);
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                    title: '警告！',
                    template: '数据获取失败！'
                });
                alertPopup.then(function(res) {});

            })
        return q.promise;
    }

    return {
        Login: function(json) {
            var url = config.basePath + '?type=CheckLogin';
            return HttpHandle(url, json);
        },
        Enterprise: function(json) {
            var url = config.basePath + '?type=SearchEnterpriseList';
            return HttpHandle(url, json);
        },
        EnterpriseByID: function(json) {
            var url = config.basePath + '?type=SearchEnterpriseByID';
            return HttpHandle(url, json);
        },
        License: function(json) {
            var url = config.basePath + '?type=SearchXkz';
            return HttpHandle(url, json);
        },
        Control: function(json) {
            var url = config.basePath + '?type=SearchInspection';
            return HttpHandle(url, json);
        },
        Product: function(json) {
            var url = config.basePath + '?type=SearchCP';
            return HttpHandle(url, json);
        },
        History: function(json) {
            var url = config.basePath + '?type=SearchEnterpriseCode';
            return HttpHandle(url, json);
        },
        AreaSchedule: function(json) {
            var url = config.basePath + '?type=AreaSchedule';
            return HttpHandle(url, json);
        },
        Plan: function(json) {
            var url = config.basePath + '?type=AreaScheduleMonthSearch';
            return HttpHandle(url, json);
        },
        Record: function(json) {
            var url = config.basePath + '?type=CheckList';
            return HttpHandle(url, json);
        },
        Expiration: function(json) {
            var url = config.basePath + '?type=SearchExpirationReminder';
            return HttpHandle(url, json);
        },
        TableHead: function(json) {
            var url = config.basePath + '?type=ScheduleEnterpriseByID';
            return HttpHandle(url, json);
        },
        TableTitle: function(json) {
            var url = config.basePath + '?type=SearchCheckHeard';
            return HttpHandle(url, json);
        },
        TableItem: function(json) {
            var url = config.basePath + '?type=SearchCheckItem ';
            return HttpHandle(url, json);
        },
        TableQuery: function(json) {
            var url = config.basePath + '?type=SearchScheduleByID';
            return HttpHandle(url, json);
        },
        TableCreate: function(json) {
            var url = config.basePath + '?type=SaveSchedule';
            return HttpHandle(url, json);
        },
        Area: function() {
            var url = config.basePath + '?type=SearchArea';
            return HttpHandle(url, { 'SuperiorId': '-1' });
        },
        ProductCatalog: function() {
            var url = config.basePath + '?type=SearchProductCatalog';
            return HttpHandle(url, { 'ProductCode': '-1' });
        }
    };
})