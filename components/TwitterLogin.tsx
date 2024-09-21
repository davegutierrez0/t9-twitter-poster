// components/TwitterLogin.js
import React from 'react';

const TwitterLogin = () => {
  const handleLogin = () => {
    // Redirect to Twitter OAuth URL
    const twitterOAuthUrl = 'https://api.twitter.com/oauth/authenticate'; // Add parameters for your app
    window.location.href = twitterOAuthUrl;
  };

  return (
    <button onClick={handleLogin}>Log in with Twitter</button>
  );
};

export default TwitterLogin;
