import { EventModel, UserModel } from './../typings/index';
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String
});

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  profilePicture: String
});

const EventSchema = mongoose.model<EventModel>('Event', eventSchema);
const UserSchema = mongoose.model<UserModel>('User', userSchema);

export { EventSchema, UserSchema };
