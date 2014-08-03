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

app.filter('trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/:blogName', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
}]);
