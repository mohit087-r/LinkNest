const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  title: {
    type : String,
    required: true
  },
  url: {
    type : String,
    required: true
  },
  description: {
    type : String,
    required: true
  },
  category: {
    type : String,
    required: true
  },
  addedOn: {
    type: Date,
    default: Date.now,
  }
});

const BookmarkModel = mongoose.model("Bookmark", bookmarkSchema)
module.exports = BookmarkModel
