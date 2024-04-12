import React, { useState } from 'react';
import styles from './style.module.css';

const Post = () => {
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
            <form className={styles.formContainer} onSubmit={handleSubmit}>
              <div className={styles.formInput}>
                <label htmlFor="locationName">Location Name:</label>
                <input
                  type="text"
                  id="locationName"
                  value={locationName}
                  onChange={handleLocationNameChange}
                />
              </div>
              <div className={styles.formInput}>
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


export default Post;



