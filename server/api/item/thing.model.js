'use strict';

import mongoose from 'mongoose';

var ThingSchema = new mongoose.Schema({
  name: String,
  dueDate: String,
  subject: String,
  
});

export default mongoose.model('Thing', ThingSchema);
