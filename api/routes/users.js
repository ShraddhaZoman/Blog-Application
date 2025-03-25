const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const Post = require("../models/Posts");

// UPDATE USER
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      // Hash password if it's being updated
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: "Error updating user", error: err.message });
    }
  } else {
    res.status(401).json({ message: "You can update only your account!" });
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Delete user's posts
      await Post.deleteMany({ username: user.username });

      // Delete the user
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "User has been deleted..." });
    } catch (err) {
      res.status(500).json({ message: "Error deleting user", error: err.message });
    }
  } else {
    res.status(401).json({ message: "You can delete only your account!" });
  }
});

// GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
});

module.exports = router;
