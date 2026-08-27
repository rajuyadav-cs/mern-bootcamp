import mongoose, { model } from "mongoose";
import { kMaxLength } from "node:buffer";

const messageScheme = new mongoose.Schema(
  {
    message: {
      type: String,
      minlength: 20,
      maxlength: 200,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

export const Message = mongoose.model("Message", messageScheme);
