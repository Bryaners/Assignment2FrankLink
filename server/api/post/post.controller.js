/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/posts              ->  index
 * POST    /api/posts              ->  create
 * GET     /api/posts/:id          ->  show
 * PUT     /api/posts/:id          ->  update
 * DELETE  /api/posts/:id          ->  destroy
 */

'use strict';

var _ = require('lodash')
    var Post = require('./post.model');  

    function handleError(res, err) {
      return res.send(500, err);
    }

    exports.index = function(req, res) {
        Post.find(function (err, posts) {
            if(err) { return handleError(res, err); }
            return res.json(200, posts);
        });
    } ;
    exports.create = function(req, res) {
      req.body.comments = []
      req.body.upvotes = 0 
      Post.create(req.body, function(err, post) {
          if (err) { return handleError(res, err); }
          return res.json(201, post);
       });
    };

     exports.show = function(req, res) {
      Post.findById(req.params.id, function (err, post) {
          if(err) { return handleError(res, err); }
          return res.json(200, post);
      });
  } ;
  // Update an existing posts upvotes.
  exports.update_upvotes = function(req, res) {
     Post.findById(req.params.id, function (err, post) {
          post.upvotes = req.body.upvotes
          post.save(function (err) {
              if(err) { return handleError(res, err); }
              return res.json(200, post);
          });
      });
  };
  // Add a comment to a post
  exports.add_comment = function(req, res) {
     Post.findById(req.params.id, function (err, post) {
            var comment = {
                body: req.body.body,
                author: req.body.author ,
                upvotes: 0
             }
            post.comments.push(comment)
            post.save(function (err) {
              if(err) { return handleError(res, err); }
              var last = _.last(post.comments)
              if (last != undefined) {
                 return res.json(200, last);
              } else {
                return res.send(500,"Database error")
                 }
            });
      });
  };
  exports.update_comment_upvotes = function(req, res) {
      Post.findById(req.params.post_id, function (err, post) {
          var comment = post.comments.id(req.params.comment_id)
          if (comment) {
            comment.upvotes = req.body.upvotes
            post.save(function (err) {
                if (err) { return handleError(res, err); }
                return res.json(200,comment)
              });
          } else {
            return res.send(401,"Bad comment id")
          }

       })
    };