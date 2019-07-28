import { Document } from 'mongoose';

export interface EventType {
  title: String;
  description: String;
  category: String;
}

export interface UserType {
  firstname: String;
  lastname: String;
  username: String;
  email: String;
  password: String;
  profilePicture: String;
}
export interface EventModel extends EventType, Document {}
export interface UserModel extends UserType, Document {}
