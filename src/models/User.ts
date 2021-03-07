import mongoose, { Schema, Document } from "mongoose";
import { composeMongoose } from "graphql-compose-mongoose";

export interface IUser extends Document {
  email: String;
  password: String;
  name: String;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
});

export const User = mongoose.model<IUser>("user", UserSchema);
export const UserTC = composeMongoose(User, {});
