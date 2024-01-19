// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [error, setError] = useState('');

  const fetchThumbnail = async () => {
    try {
      const enteredVideoUrl = videoUrl.trim(); // Trim to handle leading/trailing spaces
      const videoId = extractVideoId(enteredVideoUrl);

      if (!videoId) {
        setError('Invalid video URL');
        return;
      }

      const thumbnailUrl = `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
      setThumbnailUrl(thumbnailUrl);
      setError('');
    } catch (error) {
      console.error('Error fetching thumbnail:', error);
      setError('Error fetching thumbnail');
    }
  };

  const extractVideoId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="container">
      <h1>YouTube Thumbnail Viewer</h1>
      <input
        type="text"
        placeholder="Enter Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={fetchThumbnail}>Fetch Thumbnail</button>
      {error && <p className="error">{error}</p>}
      {thumbnailUrl && <img src={thumbnailUrl} alt="YouTube Thumbnail" />}
    </div>
  );
}

export default App;
