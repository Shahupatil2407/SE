const mongoose = require("mongoose")

const adsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      max: 50,
    },
    content: {
      type: String,
      max: 3000,
    },
    contact: {
			type: String,
			required: true
    },
    price: {
      type: Number,
      min: 0,
      required: true
    },
    picture: [
      {
        type: String,
      }
    ],
    comments: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
        text: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model("Ads", adsSchema)