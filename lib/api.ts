import axios from 'axios';

const API_BASE_URL = 'https://akinde-backend.onrender.com/api';

export const reviewService = {
  async createReview(reviewData: any) {
    try {
      const response = await axios.post(`${API_BASE_URL}/reviews`, reviewData);
      return response.data;
    } catch (error) {
      console.error('Review submission error:', error);
      throw error;
    }
  },

  async getAllReviews() {
    try {
      const response = await axios.get(`${API_BASE_URL}/reviews`);
      return response.data;
    } catch (error) {
      console.error('Fetching reviews error:', error);
      throw error;
    }
  }
};