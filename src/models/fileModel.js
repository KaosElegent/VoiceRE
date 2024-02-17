import { Schema, model, models } from "mongoose";

const recordingSchema = new Schema(
  {
    public_id: String,
    secure_url: String,
  },
  { timestamps: true }
);

const Recording = models.reordings || model("recordings", recordingSchema);

export default Recording;
