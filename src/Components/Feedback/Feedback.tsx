import React, { useState } from "react";
import "./FeedbackModal.css";
import Button from "../Button/Button";


interface Props {
  onSubmit: (rating: number | null) => void;
}

const FeedbackModal: React.FC<Props> = ({ onSubmit }) => {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className="modal">
      <h2>Rate Us</h2>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${rating && rating >= star ? "selected" : ""}`}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <Button onClick={() => onSubmit(rating)} variant="Outline">
        Submit
      </Button>
      <Button onClick={() => onSubmit(null)} variant="Outline">
        Skip
      </Button>
    </div>
  );
};

export default FeedbackModal;
