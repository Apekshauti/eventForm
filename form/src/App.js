import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    year: '',
    event: '',
    typeofevent: '',
    dateofevent: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    department: '',
    year: '',
    event: '',
    typeofevent: '',
    dateofevent: '',
  });
  
  

  const [selectedYear, setSelectedYear] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // If the clicked element is a radio button, update the selectedYear state
    if (name === 'year') {
      setSelectedYear(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the data or perform additional actions
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      // Reset the form after submission
      setFormData({
        name: '',
        department: '',
        year: '',
        event: '',
        typeofevent: '',
        dateofevent: '',
      });
    } else {
      // Form has errors, update the state to display error messages
      setErrors(validationErrors);
      
    }
  };

  const validateForm = () => {
    const errors = {};

    // Example validation rules, you can modify them based on your requirements
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.department) {
      errors.department = 'Department is required';
    }

    if (!formData.year) {
      errors.year = 'Year is required';
    }

    if (!formData.event.trim()) {
      errors.event = 'Event Name is required';
    }

    if (!formData.typeofevent) {
      errors.typeofevent = 'Event Type is required';
    }

    if (!formData.dateofevent) {
      errors.dateofevent = 'Date of Participation is required';
    }

    return errors;
  };

  return (
    <div className="event-form-container">
      <h1>Event Details Form</h1>
      <hr></hr><br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            placeholder='Enter your Full Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label>
          Department:
          <select
            className='department'
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select your Department</option>
            <option value="IT">IT</option>
            <option value="CE">CE</option>
            <option value="AIML">AIML</option>
            <option value="AIDS">AIDS</option>
            <option value="ECS">ECS</option>
            <option value="EXTC">EXTC</option>
            <option value="IoT">IoT</option>
          </select>
        </label>
        {errors.department && <p className="error-message">{errors.department}</p>}

        <div className='year'>
          Year:
          
            <input
              type="radio"
              name="year"
              value="FE"
              checked={selectedYear === 'FE'}
              onChange={handleChange}
              required
            />
            FE
          
            <input
              type="radio"
              name="year"
              value="SE"
              checked={selectedYear === 'SE'}
              onChange={handleChange}
              required
            />
            SE
          
            <input
              type="radio"
              name="year"
              value="TE"
              checked={selectedYear === 'TE'}
              onChange={handleChange}
              required
            />
            TE
          
            <input
              type="radio"
              name="year"
              value="BE"
              checked={selectedYear === 'BE'}
              onChange={handleChange}
              required
            />
            BE
          
        </div>
        {errors.year && <p className="error-message">{errors.year}</p>}

        <label>
          Event Name:
          <input
            type="text"
            name="event"
            placeholder='Enter Event Name'
            value={formData.event}
            onChange={handleChange}
            required
          />
        </label>
        {errors.event && <p className="error-message">{errors.event}</p>}

        <label>
          Event Type:
          <select
            className='typeofevent'
            name="typeofevent"
            value={formData.typeofevent}
            onChange={handleChange}
            required
          >
            <option value="">Select your Event Type</option>
            <option value="t1">Cultural Events</option>
            <option value="t2">Sports Events</option>
            <option value="t3">Academic Competitions</option>
            <option value="t4">Technical Events</option>
            <option value="t5">Literary Events</option>
            <option value="t6">Workshops and Seminars</option>
            <option value="t7">Social and Community Service Events</option>
          </select>
        </label>
        {errors.typeofevent && <p className="error-message">{errors.typeofevent}</p>}

        <label>
          Date of Participation:
          <input
            type="date"
            name="dateofevent"
            value={formData.dateofevent}
            onChange={handleChange}
            required
          />
        </label>
        {errors.dateofevent && <p className="error-message">{errors.dateofevent}</p>}

        <button type="submit">SUBMIT</button>
        
      </form>
    </div>
  );
};

export default App;
