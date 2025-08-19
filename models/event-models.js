import { Schema, mongoose } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
  },
  details: {
    require: true,
    type: String,
  },
  location: {
    require: true,
    type: String,
  },
  imageUrl: {
    require: true,
    type: String,
  },
  interested_ids: {
    require: false,
    type: Array,
  },
  going_ids: {
    require: false,
    type: Array,
  },
  swags: {
    require: false,
    type: Array,
  },
});

export const eventModel =
  mongoose.models.events ?? mongoose.model("events", schema);
