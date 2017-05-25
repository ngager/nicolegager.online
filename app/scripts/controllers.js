/**
 * Created by nicolegager on 12/13/16.
 */
'use strict';
angular.module('nicolegager')
    .controller('IndexController', ['$scope', function ($scope) {
        $scope.avatar = '/nicolegager.online/app/img/avatar.JPG';
    }])
    .controller('ContactController', ['$scope', function ($scope) {

        $scope.feedback = {firstName: "", lastName: ""};
        $scope.invalidChannelSelection = false;

    }])
    .controller('FormController', ['$scope', function ($scope) {
        $scope.sendFeedback = function () {
           // formFactory.addFeedback().create($scope.feedback);
            console.log($scope.feedback);
            if ($scope.feedback.firstName == "" || ($scope.feedback.lastName == "")) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {firstName: "", lastName: ""};
                $scope.feedback.$setPristine();
                console.log($scope.feedback);
            }
        };
    }])
;