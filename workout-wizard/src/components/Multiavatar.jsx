import React, { useEffect, useState } from 'react';

const MultiavatarComponent = ({ identifier }) => {
  const [avatarSvg, setAvatarSvg] = useState('');

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = 'lqZ5gwEMzIpBxf'; // Insert your Multiavatar API key here

        const response = await fetch(`https://api.multiavatar.com/${encodeURIComponent(identifier)}.svg?apikey=${apiKey}`);
        
        if (!response.ok) {
          console.error('Failed to fetch Multiavatar:', response.statusText);
          return;
        }

        const svg = await response.text();
        setAvatarSvg(svg);
      } catch (error) {
        console.error('Error fetching avatar:', error);
      }
    };

    // Fetch avatar when the identifier changes
    if (identifier) {
      fetchAvatar();
    }
  }, [identifier]);

  return (
    <div>
      {/* Render the SVG image */}
      <div dangerouslySetInnerHTML={{ __html: avatarSvg }} />

      {/* Additional information or styling can be added here */}
    </div>
  );
};

export default MultiavatarComponent;
