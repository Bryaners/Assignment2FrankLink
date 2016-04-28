// server/api/comment/post.model.js
'use strict';

 var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var CommentSchema = new Schema({
        body: { type: String, required: true },
        author: { type: String, required: true },
        upvotes: Number,
        updated: { type: Date, default: Date.now }
      });

    var PostSchema = new Schema({
      title: { type: String, required: true },
      link: { type: String, optional: true },
      username: { type: String, required: true },
      comments: [CommentSchema],
      upvotes: Number,
      updated: { type: Date, default: Date.now }
    });

    module.exports = mongoose.model('posts', PostSchema);