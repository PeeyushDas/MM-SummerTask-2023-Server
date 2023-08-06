const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title"],
    },

    description: {
      type: String,
      required: [true, "Please add description"],
    },

    viewcount: {
      type: Number,
      default: 0,
    },

    like: {
      type: Number,
      default: 25,
    },
  },
  {
    timestamps: true,
  }
);

const Articll = mongoose.model("Articll", articleSchema);

module.exports = Articll;
