(function() {

    'use strict';

    var module = angular.module('app');

    module.controller('ProductCtrl', function($scope, $data) {

        // ---------------------------
        //			 setup
        // ---------------------------
        $scope.data = $data.data;
        $scope.altText = $scope.data.altText;

        $scope.icons = [{
                icon: 'wifi',
                text: 'Wifi enabled'
            }, {
                icon: 'battery_charging_full',
                text: 'Battery or mains powered'
            }, {
                icon: 'sim_card',
                text: 'Works on mobile networks*'
            }, {
                icon: 'timelapse',
                text: 'Timer controlled**'
            }
        ];

        $scope.conditions = [
        	'* Only available on specific cameras.',
        	'** Requires GuardApp app and wifi or mobile data signal.'
        ];

    });

})();
