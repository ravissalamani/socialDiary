angular.module('Instagram')
  .controller('DetailCtrl', function($scope, $rootScope, $location,$auth, API,ngProgressFactory) {
	  $scope.progressbar = ngProgressFactory.createInstance();
    var mediaId = $location.path().split('/').pop();
    if ($auth.isAuthenticated() && ($rootScope.currentUser && $rootScope.currentUser.username)) {
	    $scope.progressbar.start();
	    API.getMediaById(mediaId).success(function(media) {
	      $scope.photo = media;
	      $scope.hasLiked = media.user_has_liked;
	      $scope.progressbar.complete();
	    });
    }

    $scope.like = function() {
      $scope.hasLiked = true;
      API.likeMedia(mediaId).error(function(data) {
        sweetAlert('Error', data.message, 'error');
      });
    };
  });


