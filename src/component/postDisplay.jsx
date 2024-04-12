import React from 'react';

const postDisplay = ({ locationName, photoUrl }) => {
  return (
    <div>
      <h2>Location: {locationName}</h2>
      <img src={photoUrl} alt="Uploaded Location" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default postDisplay;
