import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {  // Fixed typo
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,  // Correct placement of timestamps
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
export default Topic;
