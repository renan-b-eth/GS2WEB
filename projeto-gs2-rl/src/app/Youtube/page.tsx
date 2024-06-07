"use client"
import React, { useState } from 'react';
import YouTube from 'react-youtube'; // Corrected import statement

const Youtube: React.FC = () => {
  const [videoId, setVideoId] = useState('');

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoId(event.target.value);
  };

  return (
    <div>
      <input type="text" value={videoId} onChange={handleVideoChange} placeholder="DIGITE VIDEO PARA ATIVAR O VIDEO" />
      {videoId && (
        <YouTube
          videoId={"Ic7ATRffvyQ"}
          opts={{
            width: 440,
            height: 300,
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      )}
    </div>
  );
};

export default Youtube;