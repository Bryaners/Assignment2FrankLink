'use strict';

angular.module('yoHackerNewsApp.auth', [
  'yoHackerNewsApp.constants',
  'yoHackerNewsApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
