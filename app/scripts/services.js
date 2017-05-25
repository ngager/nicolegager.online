/**
 * Created by nicole.gager on 5/25/2017.
 */
'use strict';

angular.module('nicolegager')
    .constant('baseURL', 'http://localhost:3000/')
    .factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        var feedfac = {};
        feedfac.addFeedback = function () {
            return $resource(baseURL + 'feedback/', null, {'create': {method: 'POST'}});
        };
        return feedfac;
    }])

;