/**
 * Created by nicolegager on 12/13/16.
 */
'use strict';
angular.module('nicolegager')
    .controller('IndexController', ['$scope', function ($scope, $sce) {
        //TODO: implement controller
        $scope.image = $sce.trustAsResourceUrl('../img/ng.png');
    }])
;