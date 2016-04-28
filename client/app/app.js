'use strict';

angular.module('yoHackerNewsApp', [
  'yoHackerNewsApp.auth',
  'yoHackerNewsApp.admin',
  'yoHackerNewsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
