import { Schema, mongoose } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
  phone: {
    require: true,
    type: String,
  },
  bio: {
    require: false,
    type: String,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", schema);
