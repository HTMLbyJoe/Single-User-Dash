var singleUserDashServices = angular.module('singleUserDash.services', ['ngResource']);

singleUserDashServices.factory('Blog', ['$resource',
function($resource){
    return $resource('/blog/:blogName/posts', {}, {
        query: {method: 'GET', params: {blogName: 'htmlbyjoe', reblog_info: true}}
    });
}]);

singleUserDashServices.factory('PostsPager', ['$rootScope', '$http', 'Blog', function($rootScope, $http, Blog) {
  var PostsPager = function(params) {
    this.posts     = [];
    this.busy      = false;
    this.offset    = 0;
    this.params    = params;
  };

  PostsPager.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;

    var limit = 20;

    var params = {
        blogName: 'htmlbyjoe',
        offset:    this.offset,
        limit:     limit
    };

    angular.extend( params, this.params );

    Blog.query(params, function(response){
        var posts = response.posts;
        this.blog = response.blog;
        $rootScope.blog = this.blog;

        if (this.posts.length && posts.length && this.posts[this.posts.length - 1].id == posts[0].id) {
            return false;
        }

        for (var i = 0; i < posts.length; i++) {
            this.posts.push(posts[i]);
        }

        this.offset += limit;
        this.busy = false;

    }.bind(this));

  };

  return PostsPager;
}]);
