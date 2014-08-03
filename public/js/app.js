var app = angular.module('singleUserDash', ['ngRoute', 'ngResource', 'ngSanitize', 'singleUserDash.services']);

app.controller('DashboardCtrl', ['$scope', '$routeParams', 'Blog', function($scope, $routeParams, Blog){
    var dash = this;

    var blogName = $routeParams.blogName;
    $scope.blogName = blogName;

    Blog.query({blogName: blogName}, function(response){
        $scope.posts = response.posts;
        $scope.blog  = response.blog;
    });
}]);

app.controller('DashboardCtrl.tag', ['$scope', '$routeParams', 'Blog', function($scope, $routeParams, Blog){
    var dash = this;

    var blogName    = $routeParams.blogName,
        tag         = $routeParams.tag;
    $scope.blogName = blogName;
    $scope.tag      = tag;

    Blog.query({blogName: blogName, tag: tag}, function(response){
        $scope.posts = response.posts;
        $scope.blog  = response.blog;
    });
}]);

app.controller('DashboardCtrl.permalink', ['$scope', '$routeParams', 'Blog', function($scope, $routeParams, Blog){
    var dash = this;

    var blogName    = $routeParams.blogName,
        postId      = $routeParams.id;
    $scope.blogName = blogName;
    $scope.postId   = postId;

    Blog.query({blogName: blogName, id: postId}, function(response){
        $scope.posts = response.posts;
        $scope.blog  = response.blog;
    });
}]);

app.filter('trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/:blogName/post?/:id/:slug?', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl.permalink'});
    $routeProvider.when('/:blogName/:id/:slug?', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl.permalink'});
    $routeProvider.when('/:blogName/tagged/:tag', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl.tag'});
    $routeProvider.when('/:blogName', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
}]);
