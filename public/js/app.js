var app = angular.module('singleUserDash', ['ngRoute', 'ngResource', 'ngSanitize', 'infinite-scroll', 'singleUserDash.services']);

app.controller('DashboardCtrl', ['$scope', '$routeParams', 'PostsPager', function($scope, $routeParams, PostsPager){
    var dash = this;

    var blogName    = $routeParams.blogName;
    $scope.blogName = blogName;

    var params   = {blogName: blogName};
    $scope.pager = new PostsPager(params);
}]);

app.controller('DashboardCtrl.tag', ['$scope', '$routeParams', 'PostsPager', function($scope, $routeParams, PostsPager){
    var dash = this;

    var blogName    = $routeParams.blogName,
        tag         = $routeParams.tag;
    $scope.blogName = blogName;
    $scope.tag      = tag;

    var params   = {blogName: blogName, tag: tag};
    $scope.pager = new PostsPager(params);
}]);

app.controller('DashboardCtrl.permalink', ['$scope', '$routeParams', 'PostsPager', function($scope, $routeParams, PostsPager){
    var dash = this;

    var blogName    = $routeParams.blogName,
        postId      = $routeParams.id;
    $scope.blogName = blogName;
    $scope.postId   = postId;

    var params   = {blogName: blogName, id: postId};
    $scope.pager = new PostsPager(params);
}]);

app.filter('trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/:blogName/post?/:id/:slug?', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl.permalink'});
    $routeProvider.when('/:blogName/tagged/:tag', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl.tag'});
    $routeProvider.when('/:blogName/:id/:slug?', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl.permalink'});
    $routeProvider.when('/:blogName', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
}]);
