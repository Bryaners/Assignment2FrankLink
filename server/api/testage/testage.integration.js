'use strict';

var app = require('../..');
import request from 'supertest';

var newTestage;

describe('Testage API:', function() {

  describe('GET /api/testages', function() {
    var testages;

    beforeEach(function(done) {
      request(app)
        .get('/api/testages')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          testages = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      testages.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/testages', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/testages')
        .send({
          name: 'New Testage',
          info: 'This is the brand new testage!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTestage = res.body;
          done();
        });
    });

    it('should respond with the newly created testage', function() {
      newTestage.name.should.equal('New Testage');
      newTestage.info.should.equal('This is the brand new testage!!!');
    });

  });

  describe('GET /api/testages/:id', function() {
    var testage;

    beforeEach(function(done) {
      request(app)
        .get('/api/testages/' + newTestage._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          testage = res.body;
          done();
        });
    });

    afterEach(function() {
      testage = {};
    });

    it('should respond with the requested testage', function() {
      testage.name.should.equal('New Testage');
      testage.info.should.equal('This is the brand new testage!!!');
    });

  });

  describe('PUT /api/testages/:id', function() {
    var updatedTestage;

    beforeEach(function(done) {
      request(app)
        .put('/api/testages/' + newTestage._id)
        .send({
          name: 'Updated Testage',
          info: 'This is the updated testage!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTestage = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTestage = {};
    });

    it('should respond with the updated testage', function() {
      updatedTestage.name.should.equal('Updated Testage');
      updatedTestage.info.should.equal('This is the updated testage!!!');
    });

  });

  describe('DELETE /api/testages/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/testages/' + newTestage._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when testage does not exist', function(done) {
      request(app)
        .delete('/api/testages/' + newTestage._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
