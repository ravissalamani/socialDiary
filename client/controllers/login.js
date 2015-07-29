angular.module('Instagram')
  .controller('LoginCtrl', function($scope, $window, $location, $rootScope, $auth,ngProgressFactory) {
	$scope.progressbar = ngProgressFactory.createInstance();
    $scope.instagramLogin = function() {
      $auth.authenticate('instagram')
        .then(function(response) {
          $window.localStorage.currentUser = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(response) {
          console.log(response.data);
        });
    };

    $scope.emailLogin = function() {
    	$scope.progressbar.start();
      $auth.login({ email: $scope.email, password: $scope.password })
        .then(function(response) {
        	$scope.progressbar.complete();
          $window.localStorage.currentUser = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(response) {
          $scope.progressbar.complete();
          $scope.errorMessage = {};
          angular.forEach(response.data.message, function(message, field) {
            $scope.loginForm[field].$setValidity('server', false);
            $scope.errorMessage[field] = response.data.message[field];
          });
        });
    };

  });