var singleUserDashServices = angular.module('singleUserDash.services', ['ngResource']);

singleUserDashServices.factory('Blog', ['$resource',
function($resource){
    return $resource('/blog/:blogName/posts', {}, {
        query: {method: 'GET', params: {blogName: 'htmlbyjoe'}, isArray: true}
    });
}]);
