'use strict';

import mongoose from 'mongoose';

var AppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, optional: true },
  upvotes: Number
});



export default mongoose.model('Appointment', AppointmentSchema);
