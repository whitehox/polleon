import mongoose from "mongoose";
import { EventModel } from "../typings";

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  start_date: Date,
  end_date: Date
});

export default mongoose.model<EventModel>("Event", EventSchema);
