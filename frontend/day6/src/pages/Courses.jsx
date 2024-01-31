import React, { useState } from 'react';
import CourseCard from './CourseCard';
import "../assets/css/Courses.css";
import smc from '../assets/images/pro.jpg';
import cc from '../assets/images/datascience.jpg';
import ai from '../assets/images/ai.jpg';

const Courses = () => {
  const [coursesData, setCoursesData] = useState([
    { id: 1, title: 'Programming', imageUrl: smc, description: 'Programming' },
    { id: 2, title: 'Data Science', imageUrl: cc, description: 'DataScience' },
    { id: 3, title: 'Artificial Intelligence', imageUrl: ai, description: 'AI Base' },
  ]);

  const addCourse = () => {
    const newCourse = {
      id: Date.now(),
      title: 'New Course',
      imageUrl: '',
      description: 'New Description',
    };

    setCoursesData([...coursesData, newCourse]);
  };

  const updateCourse = (id, updatedCourse) => {
    setCoursesData((prevCourses) =>
      prevCourses.map((course) => (course.id === id ? { ...course, ...updatedCourse } : course))
    );
  };

  const deleteCourse = (id) => {
    setCoursesData((prevCourses) => prevCourses.filter((course) => course.id !== id));
  };

  return (
    <div className="courses-container">
      {coursesData.map((course) => (
        <CourseCard
          key={course.id}
          {...course}
          onUpdate={(updatedCourse) => updateCourse(course.id, updatedCourse)}
          onDelete={() => deleteCourse(course.id)}
        />
      ))}

      <button onClick={addCourse}>Add Course</button>
    </div>
  );
};

export default Courses;