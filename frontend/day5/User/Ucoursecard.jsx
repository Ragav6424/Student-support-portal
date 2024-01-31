import React from 'react';
import './UCourses.css';
import { useNavigate } from 'react-router-dom';
const UCourseCard = ({ title, imageUrl, description }) => {
  const navigate=useNavigate()

  const handleBookClick = () => {
   console.log("Book clicked for ${title}");
   alert("booked successfully")
   navigate("/thankyou")
  };

  return (
    <div className="course-card">
      <div className="card-top">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-center">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-bottom">
        <button className="book-button" onClick={handleBookClick}>
          Book
        </button>
      </div>
    </div>
  );
};

export default UCourseCard;