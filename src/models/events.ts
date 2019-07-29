import mongoose from 'mongoose';
import { EventModel } from '../typings';

const EventSchema = new mongoose.Schema({
  user_id: String,
  title: String,
  description: String,
  start_date: Date,
  end_date: Date,
  votes_per_contestant: Number
});

export default mongoose.model<EventModel>("Event", EventSchema);
