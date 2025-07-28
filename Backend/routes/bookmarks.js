const express = require("express");
const router = express.Router();
const BookmarkModel = require("../Models/Bookmark.js");

// Get all bookmarks
router.get("/", async (req, res) => {
  const bookmarks = await BookmarkModel.find();
  res.json(bookmarks);
});

// Create bookmark
router.post("/", async (req, res) => {
  try {
    const { title, url, description, category } = req.body;

    // Server-side manual validation (optional, mongoose bhi karega)
    if (!title || !url || !description || !category) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newBookmark = new BookmarkModel({ title, url, description, category });
    await newBookmark.save();

    res.status(201).json({ message: "Bookmark saved successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving bookmark", error: err.message });
  }
});

// Update bookmark
router.put("/:id", async (req, res) => {
  const updated = await BookmarkModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete bookmark
router.delete("/:id", async (req, res) => {
  await BookmarkModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
