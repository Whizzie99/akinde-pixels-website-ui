'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Star, Camera } from 'lucide-react';

interface Review {
  _id: string;
  fullName: string;
  socialMediaHandle: string;
  dateOfService: string;
  sessionType: string;
  overallSatisfaction: number;
  photographQuality: string;
  photographerProfessionalism: number;
  overallExperience: string;
  createdAt: string;
}

const StarRating = ({ rating, className = '' }: { rating: number; className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-amber-500 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
    </div>
  );
};

const ReviewsDisplay = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'recent' | 'rating'>('recent');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get('https://akinde-backend.onrender.com/api/reviews');
        setReviews(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews');
        setIsLoading(false);
      }
    }

    fetchReviews();
  }, []);

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return b.overallSatisfaction - a.overallSatisfaction;
  });

  const filteredReviews = selectedType
    ? sortedReviews.filter(review => review.sessionType === selectedType)
    : sortedReviews;

  const sessionTypes = Array.from(new Set(reviews.map(review => review.sessionType)));

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-pulse text-[#F28E2C] text-2xl font-semibold flex items-center space-x-2">
        <Camera className="w-8 h-8 animate-bounce" />
        <span>Loading Reviews...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="text-red-500 text-xl">{error}</div>
    </div>
  );

  return (
    <div className="custom-container py-20">
      <div className="">
        <div className="mb-8">
          <h1 className="text-center uppercase text-[#CA7625] font-bold lg:text-3xl text-xl">
            Client Reviews
          </h1>
          <p className='text-center mb-8 text-gray-500 pt-2'>Read what our clients say about us</p>
          <div className="lg:flex justify-between space-y-4 items-center border-b pb-4">
            <div className="space-x-4">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  selectedType === null 
                    ? 'bg-[#F28E2C] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All Reviews
              </button>
              {sessionTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-md text-sm transition-colors ${
                    selectedType === type 
                      ? 'bg-[#F28E2C] text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'recent' | 'rating')}
                className="border rounded-md px-2 py-1 text-sm bg-[#F28E2C] text-white"
              >
                <option value="recent">Most Recent</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {filteredReviews.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No reviews available
          </div>
        ) : (
          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <div 
                key={review._id} 
                className="border-b pb-6 last:border-b-0"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {review.fullName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {review.socialMediaHandle}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-sm font-medium text-gray-700 capitalize">
                      {review.sessionType} Session
                    </span>
                    <StarRating rating={review.overallSatisfaction} />
                  </div>

                  {review.overallExperience && (
                    <p className="text-gray-600 italic">
                      &quot;{review.overallExperience}&quot;
                    </p>
                  )}
                </div>

                <div className="gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">
                      Photo Quality:
                    </span>
                    <span className="ml-2 text-gray-600 capitalize">
                      {review.photographQuality}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Photographer Professionalism:
                    </span>
                    <StarRating 
                      rating={review.photographerProfessionalism} 
                      className="inline-flex ml-2" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default ReviewsDisplay;