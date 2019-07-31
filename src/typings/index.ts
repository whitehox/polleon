import { Document } from 'mongoose';

export interface EventType {
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  votes_per_contestant: number;
  event_type: string;
  category_id: string;
  created_at: string;
}

export interface UserType {
  firstname: string;
  lastname: string;
  username: string;
  company_name?: string;
  profile_image?: string;
  email: string;
  phone_number?: string;
  password: string;
  account_Type: string;
  created_at: string;
}

export interface CategoryType {
  category_id: string;
  name: string;
}

export interface EventInput {
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  votes_per_contestant: number;
  event_type: string;
  category_id: string;
  created_at: string;
}

export interface EventModel extends EventType, Document {}
export interface UserModel extends UserType, Document {}
