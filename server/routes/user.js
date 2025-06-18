const express = require('express');
const User = require('../models/User');
const { authenticateToken, isAuthenticated } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/user/profile
// @desc    Get user profile
router.get('/profile', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        photo: user.photo,
        challenges: user.challenges,
        waterSavings: user.waterSavings,
        points: user.points,
        level: user.level,
        badges: user.badges
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   POST /api/user/challenge/complete
// @desc    Mark challenge as completed
router.post('/challenge/complete', isAuthenticated, async (req, res) => {
  try {
    const { challengeType, waterSaved = 0 } = req.body;
    const user = await User.findById(req.user._id);
    
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Update challenge completion
    switch (challengeType) {
      case 'shorterShower':
        user.challenges.hasCompletedShorterShower = true;
        user.challenges.shorterShowerCount += 1;
        user.waterSavings.totalLitresSaved += waterSaved || 20; // Default 20L saved
        user.points += 10;
        break;
      case 'useBuckets':
        user.challenges.hasCompletedUseBuckets = true;
        user.challenges.bucketsUsedCount += 1;
        user.waterSavings.totalLitresSaved += waterSaved || 15; // Default 15L saved
        user.points += 8;
        break;
      case 'educateOthers':
        user.challenges.hasCompletedEducateOthers = true;
        user.challenges.peopleEducatedCount += 1;
        user.points += 15; // More points for education
        break;
      default:
        return res.status(400).json({ success: false, message: 'Invalid challenge type' });
    }

    // Update level based on points
    user.level = Math.floor(user.points / 100) + 1;

    // Update last activity date
    user.waterSavings.lastActivityDate = new Date();

    await user.save();

    res.json({
      success: true,
      message: 'Challenge completed successfully!',
      user: {
        challenges: user.challenges,
        waterSavings: user.waterSavings,
        points: user.points,
        level: user.level
      }
    });
  } catch (error) {
    console.error('Error completing challenge:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   GET /api/user/savings
// @desc    Get user water savings summary
router.get('/savings', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    res.json({
      success: true,
      savings: {
        totalLitresSaved: user.waterSavings.totalLitresSaved,
        dailyGoal: user.waterSavings.dailyGoal,
        weeklyGoal: user.waterSavings.weeklyGoal,
        currentStreak: user.waterSavings.currentStreak,
        level: user.level,
        points: user.points,
        completedChallenges: {
          shorterShower: user.challenges.shorterShowerCount,
          buckets: user.challenges.bucketsUsedCount,
          education: user.challenges.peopleEducatedCount
        }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   POST /api/user/update-goal
// @desc    Update user's daily/weekly goals
router.post('/update-goal', isAuthenticated, async (req, res) => {
  try {
    const { dailyGoal, weeklyGoal } = req.body;
    const user = await User.findById(req.user._id);
    
    if (dailyGoal) user.waterSavings.dailyGoal = dailyGoal;
    if (weeklyGoal) user.waterSavings.weeklyGoal = weeklyGoal;
    
    await user.save();
    
    res.json({
      success: true,
      message: 'Goals updated successfully',
      waterSavings: user.waterSavings
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;