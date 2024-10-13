const User = require('../models/User');
const multer = require('multer');
const path = require('path');

// Setup for profile picture uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

exports.updateUserProfile = async (req, res) => {
  const { username } = req.body;
  const profilePicture = req.file ? req.file.path : undefined;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { username, profilePicture },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating profile' });
  }
};

module.exports.upload = upload;
