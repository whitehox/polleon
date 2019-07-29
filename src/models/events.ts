import mongoose from 'mongoose';
import { EventModel } from '../typings';

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  start_date: Date,
  end_date: Date,
  votes_per_contestant: Number,
  event_type: String,
  category_id: String,
  created_at: Date
});

export default mongoose.model<EventModel>('Event', EventSchema);
