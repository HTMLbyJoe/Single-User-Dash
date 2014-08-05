var app = angular.module('singleUserDash', ['ngRoute', 'ngResource', 'ngSanitize', 'infinite-scroll', 'singleUserDash.services']);

app.controller('DashboardCtrl', ['$scope', '$routeParams', 'PostsPager', function($scope, $routeParams, PostsPager){
    $scope.blogName = $routeParams.blogName;

    var params   = {blogName: $routeParams.blogName};
    params.tag   = $routeParams.tag ? $routeParams.tag : '';
    params.id    = $routeParams.id  ? $routeParams.id  : '';
    $scope.pager = new PostsPager(params);
}]);

app.filter('trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/:blogName/post?/:id/:slug?', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
    $routeProvider.when('/:blogName/tagged/:tag', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
    $routeProvider.when('/:blogName/:id/:slug?', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
    $routeProvider.when('/:blogName', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
}]);
