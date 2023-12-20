import React, { useState} from 'react';
import type { ChangeEvent } from 'react';

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
      <div>
          <form onSubmit={handleSubmit}>
            <div>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="name.firstName"
                    value={formData.name.firstName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="name.lastName"
                    value={formData.name.lastName}
                    onChange={handleInputChange}
                  />
                </label>
            </div>
            <div>
                <label>
                  Email:
                  <input
                    type="email"
                    name="contact.email"
                    value={formData.contact.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="text"
                    name="contact.phone"
                    value={formData.contact.phone}
                    onChange={handleInputChange}
                  />
                </label>
            </div>
            <div className='address'>
                <label>
                  Address:
                  <input
                    type="text"
                    name="address.address"
                    value={formData.address.address}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  City:
                  <input
                    type="text"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  State:
                  <input
                    type="text"
                    name="address.state"
                    value={formData.address.state}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Pincode:
                  <input
                    type="text"
                    name="address.pincode"
                    value={formData.address.pincode}
                    onChange={handleInputChange}
                  />
                </label>
            </div>
            <div className="buttonArea"><button type="submit">Submit</button></div>
          </form>
      </div>
    );
  }