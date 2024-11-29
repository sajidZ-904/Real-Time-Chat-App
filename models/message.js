const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    room: { type: String, required: true },
    messages: [
      {
        sender: String,
        text: String,
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
