angular.module('Instagram')
    .factory('API', function($http) {

      return {
        getFeed: function() {
          return $http.get('http://socialdiary.eu-gb.mybluemix.net/api/feed');
        },
        getMediaById: function(id) {
          return $http.get('http://socialdiary.eu-gb.mybluemix.net/api/media/' + id);
        },
        likeMedia: function(id) {
          return $http.post('http://socialdiary.eu-gb.mybluemix.net/api/like', { mediaId: id });
        },
        getTag: function(id) {
            return $http.get('http://socialdiary.eu-gb.mybluemix.net/api/tag/' + id);
          }
      }

    });