var mainApplicationModuleName = 'mean';

//Create a the main application module 
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'example']);

mainApplicationModule.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function() {
	//Initiates a new AngularJS application using the main application module
  	angular.bootstrap(document, [mainApplicationModuleName]);
});