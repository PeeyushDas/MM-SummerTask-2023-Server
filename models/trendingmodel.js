const mongoose = require("mongoose");

const trendingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title"],
    },

    description: {
      type: String,
      required: [true, "Please add description"],
    },

    token: {
      type: String,
    },

    viewcount: {
      type: Number,
      default: 0,
    },

    like: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const trends = mongoose.model("trends", trendingSchema);

module.exports = trends;
