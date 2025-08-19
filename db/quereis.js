import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

import { eventModel } from "@/models/event-models";
import mongoose from "mongoose";

async function getAllEvents(query) {
  let allEvents = [];
  if (query) {
    const regex = new RegExp(query, "i");
    allEvents = await eventModel.find({ name: { $regex: regex } }).lean();
  } else {
    allEvents = await eventModel.find().lean();
  }
  return replaceMongoIdInArray(allEvents);
}
async function getEventById(eventId) {
  const event = await eventModel.findById(eventId).lean();
  return replaceMongoIdInObject(event);
}

async function createUser(user) {
  return await userModel.create(user);
}
async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function updateInterest(eventsId, userId) {
  const event = await eventModel.findById(eventsId);

  if (event) {
    const foundUser = event.interested_ids.find(
      (id) => id.toString() === userId
    );
    if (foundUser) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(userId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(userId));
    }
    event.save();
  }
}
async function updateGoing(eventId, userId) {
  const event = await eventModel.findById(eventId);
  event.going_ids.push(new mongoose.Types.ObjectId(userId));
  event.save();
}

export {
  createUser,
  findUserByCredentials,
  getAllEvents,
  getEventById,
  updateGoing,
  updateInterest,
};
