const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const BookmarkRoute = require("./routes/bookmarks");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookmarks", BookmarkRoute);

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error(err));
