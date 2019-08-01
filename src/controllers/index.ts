import Event from '../models/events';
import User from '../models/users';
import hash from 'password-hash';

import jwt from 'jsonwebtoken';

import { EventInput, UserType, LoginInput } from '../typings';

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

export async function loginUser(userInput: LoginInput) {
  const user = await getSingleUser({ email: userInput.email });
  let isUser;
  // let errorMessage;
  //@ts-ignore
  if (!hash.verify(userInput.password, user.password)) {
    // errorMessage = 'The user name or password is incorrect';
    throw new Error('The user name or password is incorrect');
  } else {
    isUser = true;
  }
  const token = jwt.sign(
    { email: userInput.email },
    `${process.env.JWT_SECRET_KEY}`,
    {
      expiresIn: '1d'
    }
  );
  return { isUser, token };
}
