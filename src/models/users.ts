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
    isPolleon: String,
    created_at: { type: Date, default: new Date() }
  },
  {
    versionKey: false
  }
);

export default mongoose.model<UserModel>('User', UserSchema);
