angular
    .module('H5App.services', [])
    .factory('H5Data', function($injector, $q) {
        // var API = $injector.get('Api');

        return {
            //产品风险类别  
            ZjjRisk: [
                { name: '高风险', value: 3 },
                { name: '中风险', value: 2 },
                { name: '低风险', value: 1 },
                { name: '未分', value: 0 },
            ]
        }

    });