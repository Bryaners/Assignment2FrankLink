'use strict';

describe('Controller: PostsControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoHackerNewsApp.PostsController'));

  var PostsControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsControllerCtrl = $controller('PostsControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
