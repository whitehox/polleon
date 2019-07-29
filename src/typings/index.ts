import { Document } from 'mongoose';

export interface EventType {
  user_id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  votes_per_contestant: number;
  event_type: string;
  created_at: Date;
}

export interface UserType {
  user_id: string;
  firstname: string;
  lastname: string;
  username: string;
  company_name?: string;
  profile_image?: string;
  email: string;
  phone_number?: string;
  password: string;
  created_at: Date;
}

export interface EventModel extends EventType, Document {}
