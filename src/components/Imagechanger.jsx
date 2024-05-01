import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Imagechanger.css'
const ImageChanger = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImageUrl(response.data.message); // Use response.data.message for the image URL
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  useEffect(() => {
    fetchRandomImage(); 
  }, []);

  return (
    <div className="image-changer-container">
      <button className="image-changer-button" onClick={fetchRandomImage}>Change Image</button>
      {imageUrl && <img className="random-image" src={imageUrl} alt="Random Dog" />}
    </div>
  );
  
};

export default ImageChanger;
