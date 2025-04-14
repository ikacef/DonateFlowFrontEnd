import React, { useState } from 'react';

const AddCharityForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !imageUrl) return;

    const newCharity = {
      id: Date.now(),
      name,
      description,
      imageUrl,
    };

    onAdd(newCharity);

    // Clear form
    setName('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <h4 className="mb-3">Add a New Charity</h4>
      <div className="mb-3">
        <label className="form-label">Charity Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Save the Oceans"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What does this charity do?"
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input
          type="text"
          className="form-control"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https://..."
        />
      </div>
      <button type="submit" className="btn btn-success">Add Charity</button>
    </form>
  );
};

export default AddCharityForm;
