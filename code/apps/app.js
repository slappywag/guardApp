(function () {

  'use strict';

	var module = angular.module('app');

	module.controller('AppCtrl', function ($scope, $data) {

		// ---------------------------
		//			 setup
		// ---------------------------
		$scope.data = $data.data;
		$scope.altText = $scope.data.altText;
		$scope.btnSelect = 0;

		$scope.set = function (index) {
			$scope.btnSelect = index;
		};

		$scope.buttons = [
			'Map with camera locations.',
			'Recieve alerts and photos on you phone.',
			'Turn your cameras on and off from the app.'
		];

		$scope.icons = [{
                icon: 'location_on',
                text: 'Camera locations'
            }, {
                icon: 'battery_std',
                text: 'Live battery updates'
            }, {
                icon: 'notifications',
                text: 'Alerts on your phone'
            }, {
                icon: 'photo',
                text: 'Photos sent to your app'
            }
        ];
	});

}) ();