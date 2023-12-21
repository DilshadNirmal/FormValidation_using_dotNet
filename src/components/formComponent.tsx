import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import './formComponent.css'

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: { firstName: '', lastName: '' },
    contact: { email: '', phone: '' },
    address: { address: '', city: '', state: '', pincode: '' }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [container, field] = name.split('.');
    setFormData((prevFormData) => ({
      ...prevFormData,
      [container]: { ...prevFormData[container], [field]: value }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="name.firstName"
            value={formData.name.firstName}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="name.lastName"
            value={formData.name.lastName}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter your last name"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="contact.email"
            value={formData.contact.email}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="contact.phone"
            value={formData.contact.phone}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address.address"
            value={formData.address.address}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter your address"
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter your city"
          />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="address.state"
            value={formData.address.state}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter your state"
          />
        </div>
        <div className="form-group">
          <label>Pincode:</label>
          <input
            type="text"
            name="address.pincode"
            value={formData.address.pincode}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter your pincode"
          />
        </div>
        <div className="buttonArea">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}
