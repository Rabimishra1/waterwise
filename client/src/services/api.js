import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important for sessions
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('waterwise_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API functions
export const authAPI = {
  // Start Google OAuth
  googleLogin: () => {
    window.location.href = `${API_BASE_URL}/auth/google`;
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/current');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Logout
  logout: async () => {
    try {
      const response = await api.post('/auth/logout');
      localStorage.removeItem('waterwise_token');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export const userAPI = {
  // Get user profile
  getProfile: async () => {
    try {
      const response = await api.get('/api/user/profile');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Complete challenge
  completeChallenge: async (challengeType, waterSaved = 0) => {
    try {
      const response = await api.post('/api/user/challenge/complete', {
        challengeType,
        waterSaved
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get water savings
  getSavings: async () => {
    try {
      const response = await api.get('/api/user/savings');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update goals
  updateGoals: async (dailyGoal, weeklyGoal) => {
    try {
      const response = await api.post('/api/user/update-goal', {
        dailyGoal,
        weeklyGoal
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default api;