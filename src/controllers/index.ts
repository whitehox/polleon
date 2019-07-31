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

export function getUsers() {
  return User.find();
}

export function getSingleUser(email: any) {
  return User.findOne(email);
}

export async function addUser(userInput: UserType) {
  const dbCheck = await User.findOne({ email: userInput.email });
  if (dbCheck) {
    throw new Error('This user already exist');
  }
  const user = new User(userInput);
  return user.save();
}

export function getUsers() {
  return User.find();
}
