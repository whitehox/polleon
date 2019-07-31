import mongoose from 'mongoose';
import { UserModel } from '../typings';

const UserSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    username: String,
    company_name: String,
    profile_image: String,
    email: String,
    phone_number: String,
    password: String,
    account_type: String,
    created_at: String
  },
  {
    versionKey: false
  }
);

export default mongoose.model<UserModel>('User', UserSchema);
