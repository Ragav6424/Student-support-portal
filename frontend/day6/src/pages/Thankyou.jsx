import React, { useState } from 'react';
import '../assets/css/Thankyou.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    mobileNo: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Redirect or show a success message as needed
  };

  return (
    <div className='student-form'>
    <h3>course enrolled succesfully!!</h3>
    <center>
      <h1>Student Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </div>

        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Mobile No:</label>
          <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
        </div>

        <div>
          <label>Enquiry:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} rows="4" required />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </center>
    </div>
  );
};

export default StudentForm;
