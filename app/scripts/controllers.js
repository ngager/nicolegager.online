/**
 * Created by nicolegager on 12/13/16.
 */
'use strict';
angular.module('nicolegager')
    .controller('IndexController', ['$scope', function ($scope) {
        $scope.avatar = '/nicolegager.online/app/img/avatar.JPG';
        $scope.getNepalImages = function () {
            var imageSource = '/nicolegager.online/app/img/nepal/';
            var nepalMediaList = [];
            for (var i = 1; i < 45; i++) {
                nepalMediaList.push({src: imageSource + 'NEPAL-' + i + '.jpeg'});
            }
            return nepalMediaList;
        };
    }])
;