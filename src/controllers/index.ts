import Event from '../models/events';

import { EventInput } from '../typings';

export function getEvents() {
  return Event.find();
}

export function addEvent(eventInput: EventInput) {
  const event = new Event(eventInput);
  return event.save();
}
