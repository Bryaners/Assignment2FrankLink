'use strict';

angular.module('yoHackerNewsApp')
  .config(function ($routeProvider) {
     $routeProvider
      .when('/posts', {
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsController'
      });
  });