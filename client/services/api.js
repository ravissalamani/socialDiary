angular.module('Instagram')
    .factory('API', function($http) {

      return {
        getFeed: function() {
          return $http.get('http://socialdiary.mybluemix.net/api/feed');
        },
        getMediaById: function(id) {
          return $http.get('http://socialdiary.mybluemix.net/api/media/' + id);
        },
        likeMedia: function(id) {
          return $http.post('http://socialdiary.mybluemix.net/api/like', { mediaId: id });
        },
        getTag: function(id) {
            return $http.get('http://socialdiary.mybluemix.net/api/tag/' + id);
          },
        getTagCount: function(id) {
              return $http.get('http://socialdiary.mybluemix.net/api/tagCount/' + id);
        }
      }

    });