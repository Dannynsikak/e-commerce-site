import React, { useState } from "react";
import { IoStar } from "react-icons/io5";

interface RatingProps {
  initialRating?: number;
}

const Rating: React.FC<RatingProps> = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (newRating: number) => {
    setRating(rating === newRating ? 0 : newRating);
  };
  return (
    <div>
      <div className="flex items-center space-x-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-black cursor-pointer ${
              rating > i ? "fill-current" : "text-gray-400"
            }`}
            onClick={() => handleRatingChange(i + 1)}
          >
            <IoStar className="size-7" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
