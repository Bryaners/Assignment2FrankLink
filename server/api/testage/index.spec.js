'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var testageCtrlStub = {
  index: 'testageCtrl.index',
  show: 'testageCtrl.show',
  create: 'testageCtrl.create',
  update: 'testageCtrl.update',
  destroy: 'testageCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var testageIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './testage.controller': testageCtrlStub
});

describe('Testage API Router:', function() {

  it('should return an express router instance', function() {
    testageIndex.should.equal(routerStub);
  });

  describe('GET /api/testages', function() {

    it('should route to testage.controller.index', function() {
      routerStub.get
        .withArgs('/', 'testageCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/testages/:id', function() {

    it('should route to testage.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'testageCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/testages', function() {

    it('should route to testage.controller.create', function() {
      routerStub.post
        .withArgs('/', 'testageCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/testages/:id', function() {

    it('should route to testage.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'testageCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/testages/:id', function() {

    it('should route to testage.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'testageCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/testages/:id', function() {

    it('should route to testage.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'testageCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
