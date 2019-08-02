import mongoose from 'mongoose';
import { UserModel } from '../typings';

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    company_name: String,
    profile_image: String,
    email: { type: String, required: true },
    phone_number: String,
    password: { type: String, required: true },
    account_type: String,
    created_at: String
  },
  {
    versionKey: false
  }
);

export default mongoose.model<UserModel>('User', UserSchema);
