const express = require('express');
const { updateUserProfile, upload } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.put('/profile', authMiddleware, upload.single('profilePicture'), updateUserProfile);

module.exports = router;
