const express = require("express");
const router = express.Router();
const BookmarkModel = require("../Models/Bookmark.js");

// Get all bookmarks
router.get("/", async (req, res) => {
  const bookmarks = await BookmarkModel.find();
  res.status(200).json({
    data: bookmarks
  })
});

// Create bookmark
router.post("/", async (req, res) => {
  try {
    const { title, url, description, category } = req.body;

    if (!title || !url || !description || !category) {
      return res.status(400).json({ 
        message: "All fields are required!",
        success : false,
        error : true
      });
    }

    const newBookmark = new BookmarkModel({ title, url, description, category });
    await newBookmark.save();

    res.status(201).json({ 
      message: "Bookmark saved successfully!",
      success: true,
      error : false 
    });
  } catch (err) {
    res.status(500).json({ 
      message: "Interval server error",
      success : false,
      error : true
    });
  }
});

// Update bookmark
router.put("/:id", async (req, res) => {
  const updated = await BookmarkModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete bookmark
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await BookmarkModel.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ 
      message: 'Bookmark not found', 
      success : false,
      error : true
    });

    res.json({ 
      message: 'Deleted successfully',
      success : true,
      error : false 
    });

  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      success : false,
      error : true 
    });
  }
});


module.exports = router;
