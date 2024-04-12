import React, { useState } from 'react';

const LocationForm = () => {
  const [locationName, setLocationName] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleLocationNameChange = (event) => {
    setLocationName(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Location Name:', locationName);
    console.log('Photo:', photo);
    setLocationName('');
    setPhoto(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="locationName">Location Name:</label>
        <input
          type="text"
          id="locationName"
          value={locationName}
          onChange={handleLocationNameChange}
        />
      </div>
      <div>
        <label htmlFor="photo">Photo:</label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handlePhotoChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LocationForm;
