// EnrolledCourses.jsx

import React from 'react';

const EnrolledCourses = ({ enrolledCourses }) => {
  return (
    <div>
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
      <p>Total Courses Enrolled: {enrolledCourses.length}</p>
    </div>
  );
};

export default EnrolledCourses;
