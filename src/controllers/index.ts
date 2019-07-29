import Event from "../models/events";

export function getEvents() {
  return Event.find();
}
