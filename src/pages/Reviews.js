import React, { useState } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [editReviewId, setEditReviewId] = useState(null);
  const [reviewText, setReviewText] = useState('');

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() !== '') {
      const newReview = {
        id: new Date().getTime().toString(),
        text: reviewText,
      };
      setReviews([...reviews, newReview]);
      setReviewText('');
    }
  };

  const handleReviewEdit = (id) => {
    const reviewToEdit = reviews.find((review) => review.id === id);
    if (reviewToEdit) {
      setEditReviewId(id);
      setReviewText(reviewToEdit.text);
    }
  };

  const handleReviewUpdate = () => {
    if (reviewText.trim() !== '') {
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === editReviewId ? { ...review, text: reviewText } : review
        )
      );
      setEditReviewId(null);
      setReviewText('');
    }
  };

  const handleReviewDelete = (id) => {
    setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
  };

  return (
    <div>
      <h2>Reviews</h2>
      <form onSubmit={editReviewId ? handleReviewUpdate : handleReviewSubmit}>
        <textarea
          value={reviewText}
          onChange={handleReviewTextChange}
          placeholder="Write your review..."
          rows={4}
        ></textarea>
        <button type="submit">{editReviewId ? 'Update Review' : 'Submit Review'}</button>
      </form>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.text}</p>
            <button onClick={() => handleReviewEdit(review.id)}>Edit</button>
            <button onClick={() => handleReviewDelete(review.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
