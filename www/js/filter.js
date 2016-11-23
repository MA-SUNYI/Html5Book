/**
 * Created by ma-sunyi on 2016/11/16.
 */
angular
    .module('H5App.filter', [])
    .filter('JSONFilter', function() {
        return function(jsonstr) {
            jsonstr = jsonstr.replace(/\n/, '');
            jsonstr = jsonstr.replace(/\r/, '');
            jsonstr = jsonstr.replace(/\r\n/, '');
            return JSON.parse(jsonstr);
        };
    });