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

app.filter('quoteClass', [function(){
    return function(text) {
        var className = 'extra-large';

        var breakpoints = [
            {className: 'large',  size: 20},
            {className: 'medium', size: 81},
            {className: 'small',  size: 300}
        ];

        breakpoints.forEach(function(point){
            if (text.length >= point.size) {
                className = point.className;
            }
        });

        return className;
    };
}]);

app.filter('parseUrlHostname', [function(){
    return function(url) {
        return url.split('/')[2];
    };
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/:blogName/post?/:id/:slug?', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
    $routeProvider.when('/:blogName/tagged/:tag', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
    $routeProvider.when('/:blogName/:id/:slug?', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
    $routeProvider.when('/:blogName', {templateUrl: '/views/posts/list.html', controller: 'DashboardCtrl'});
}]);
