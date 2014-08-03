var app = angular.module('singleUserDash', ['ngRoute', 'ngResource', 'singleUserDash.services']);

app.controller('DashboardCtrl', ['$scope', '$routeParams', 'Blog', function($scope, $routeParams, Blog){
    var dash = this;

    var blogName = $routeParams.blogName;
    $scope.blogName = blogName;

    $scope.posts = Blog.query({blogName: blogName});
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/:blogName', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
}]);
