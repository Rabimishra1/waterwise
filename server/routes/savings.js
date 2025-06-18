const express = require('express');
const router = express.Router();
const Saving = require('../models/saving');
const User = require('../models/User');
const { authenticateToken } = require('../middleware/auth'); // <-- Use the correct middleware

// POST endpoint
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { litres, challengeName } = req.body;

    // 1. Save the detailed record
    const saving = new Saving({ userId: req.user._id, litres, challengeName });
    await saving.save();

    // 2. Update the User model
    const user = await User.findById(req.user._id);
    if (!user) throw new Error('User not found');

    user.waterSavings.totalLitresSaved += litres;
    if (challengeName === 'Use Buckets') {
      user.challenges.hasCompletedUseBuckets = true;
      user.challenges.bucketsUsedCount += 1;
    }

    const today = new Date();
    const lastDate = user.waterSavings.lastActivityDate;
    const isNewDay = !lastDate || lastDate.getDate() !== today.getDate();
    if (isNewDay) {
      user.waterSavings.lastActivityDate = today;
    }

    await user.save();

    res.status(201).json(saving);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get('/', authenticateToken, async (req, res) => {
  try {
    const savings = await Saving.find({ userId: req.user._id });
    res.json(savings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




// Export the router
module.exports = router;
