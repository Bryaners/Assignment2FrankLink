/**
 * Testage model events
 */

'use strict';

import {EventEmitter} from 'events';
import Testage from './testage.model';
var TestageEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TestageEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Testage.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TestageEvents.emit(event + ':' + doc._id, doc);
    TestageEvents.emit(event, doc);
  }
}

export default TestageEvents;
