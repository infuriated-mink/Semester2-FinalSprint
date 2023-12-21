import React, { useState, useEffect } from 'react';

const ProfilePic = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    // Fetch the profile picture URL from the API
    fetch('https://xsgames.co/randomusers/avatar.php?g=pixel')
      .then((response) => response.json())
      .then((data) => {
        // Extract the avatar URL from the response
        const avatarUrl = data && data.avatar;
        setAvatarUrl(avatarUrl);
      })
      .catch((error) => console.error('Error fetching profile picture:', error));
  }, []);

  return (
    <div>
      {/* Display the profile picture in an HTML img tag */}
      {avatarUrl && <img src={avatarUrl} alt="Profile" />}
    </div>
  );
};

export default ProfilePic;
