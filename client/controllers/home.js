angular.module('Instagram')
  .controller('HomeCtrl', function($scope, $window, $rootScope, $auth, API,ngProgressFactory) {
	  $scope.progressbar = ngProgressFactory.createInstance();
	  
    if ($auth.isAuthenticated() && ($rootScope.currentUser && $rootScope.currentUser.username)) {
    	$scope.progressbar.start();
      API.getFeed().success(function(data) {
        $scope.photos = data;
        $scope.progressbar.complete();
      });
    }

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function() {
      $auth.link('instagram')
        .then(function(response) {
          $window.localStorage.currentUser = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
          API.getFeed().success(function(data) {
            $scope.photos = data;
          });
        });
    };

  });