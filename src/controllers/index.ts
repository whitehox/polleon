import { EventSchema, UserSchema } from '../models/index';
import { EventType, UserType } from '../typings/index';

export function createEvent(eventBody: EventType) {
  const data = new EventSchema(eventBody);
  return data.save();
}

export function getEvents() {
  return EventSchema.find();
}

export function createUser(userBody: UserType) {
  const data = new UserSchema(userBody);
  return data.save();
}
