import mongoose from 'mongoose';
import { UserModel } from '../typings';

const UserSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  company_name: String,
  profile_image: String,
  email: String,
  phone_number: String,
  password: String,
  created_at: String
});

export default mongoose.model<UserModel>('User', UserSchema);
