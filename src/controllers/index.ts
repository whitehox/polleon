import Event from '../models/events';
import User from '../models/users';

import { EventInput, UserType } from '../typings';

export function getEvents() {
  return Event.find();
}

export function addEvent(eventInput: EventInput) {
  const event = new Event(eventInput);
  return event.save();
}

export function addUser(userInput: UserType) {
  const user = new User(userInput);
  return user.save();
}

export function getUsers() {
  return User.find();
}
