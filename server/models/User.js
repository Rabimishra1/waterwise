const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  photo: {
    type: String,
    default: ''
  },
  // Challenge completion status
  challenges: {
    hasCompletedShorterShower: {
      type: Boolean,
      default: false
    },
    hasCompletedUseBuckets: {
      type: Boolean,
      default: false
    },
    hasCompletedEducateOthers: {
      type: Boolean,
      default: false
    },
    shorterShowerCount: {
      type: Number,
      default: 0
    },
    bucketsUsedCount: {
      type: Number,
      default: 0
    },
    peopleEducatedCount: {
      type: Number,
      default: 0
    }
  },
  // Water savings tracking
  waterSavings: {
    totalLitresSaved: {
      type: Number,
      default: 0
    },
    dailyGoal: {
      type: Number,
      default: 50 // liters per day
    },
    weeklyGoal: {
      type: Number,
      default: 350 // liters per week
    },
    currentStreak: {
      type: Number,
      default: 0
    },
    lastActivityDate: {
      type: Date,
      default: Date.now
    }
  },
  // User points/gamification
  points: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  badges: [{
    name: String,
    earnedDate: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);