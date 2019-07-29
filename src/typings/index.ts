import { Document } from "mongoose";

export interface EventType {
  title: string;
  description: string;
}

export interface EventModel extends EventType, Document {}
