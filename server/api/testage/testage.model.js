'use strict';

import mongoose from 'mongoose';

var TestageSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Testage', TestageSchema);
