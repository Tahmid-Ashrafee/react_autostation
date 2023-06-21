import React, { useState } from 'react';

const DataEntryForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('available');
  const [colors, setColors] = useState([]);
  const [importDate, setImportDate] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setColors((prevColors) => [...prevColors, value]);
    } else {
      setColors((prevColors) => prevColors.filter((color) => color !== value));
    }
  };

  const handleImportDateChange = (e) => {
    setImportDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform data entry logic
    console.log('Form submitted:', {
      name,
      category,
      description,
      status,
      colors,
      importDate,
    });
    // Reset form fields
    setName('');
    setCategory('');
    setDescription('');
    setStatus('available');
    setColors([]);
    setImportDate('');
  };

  return (
    <div className="container">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={handleNameChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <select id="category" className="form-select" value={category} onChange={handleCategoryChange} required>
            <option value="">Select category</option>
            <option value="hybrid">Hybrid</option>
            <option value="electric">Electric</option>
            <option value="gasoline">Gasoline</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Car Description:</label>
          <textarea id="description" className="form-control" value={description} onChange={handleDescriptionChange} required></textarea>
        </div>
        <div className="mb-3">
          <label>Status:</label>
          <div>
            <label className="form-check-label">
              <input type="radio" className="form-check-input" value="available" checked={status === 'available'} onChange={handleStatusChange} />
              Available
            </label>
          </div>
          <div>
            <label className="form-check-label">
              <input type="radio" className="form-check-input" value="unavailable" checked={status === 'unavailable'} onChange={handleStatusChange} />
              Unavailable
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label>Colors:</label>
          <div>
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="black" checked={colors.includes('black')} onChange={handleColorChange} />
              Black
            </label>
          </div>
          <div>
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="silver" checked={colors.includes('silver')} onChange={handleColorChange} />
              Silver
            </label>
          </div>
          <div>
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="white" checked={colors.includes('white')} onChange={handleColorChange} />
              White
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="importDate" className="form-label">Date of Import:</label>
          <input type="date" id="importDate" className="form-control" value={importDate} onChange={handleImportDateChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default DataEntryForm;
