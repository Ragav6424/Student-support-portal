
import React, { useState } from 'react';

const CourseCard = ({ id, title, imageUrl, description, onUpdate, onDelete }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const handleUpdate = () => {
    onUpdate({ title: updatedTitle, description: updatedDescription });
    setIsEditingDescription(false);
  };

  const handleAddImage = () => {
    // Implement image upload functionality if needed
    // You can use a file input or any image selection method here
    // For simplicity, just updating the image to a placeholder
    onUpdate({ imageUrl: 'path/to/new/image.jpg' });
  };

  const handleEditDescription = () => {
    setIsEditingDescription(true);
  };

  return (
    <div className="course-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      {isEditingDescription ? (
        <textarea
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />
      ) : (
        <p>{description}</p>
      )}
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
      <button onClick={handleAddImage}>Add Image</button>
      {isEditingDescription ? (
        <button onClick={handleUpdate}>Save Description</button>
      ) : (
        <button onClick={handleEditDescription}>Edit Description</button>
      )}
    </div>
  );
};

export default CourseCard;