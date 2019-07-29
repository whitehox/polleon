import { Document } from "mongoose";

export interface EventType {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  votes_per_contestant: number;
}

export interface EventModel extends EventType, Document {}
