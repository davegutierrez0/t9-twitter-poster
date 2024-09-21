import React, { useState } from 'react';
import axios from 'axios';

const TweetBox: React.FC = () => {
  const [tweet, setTweet] = useState<string>('');

  const handleTweetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value);
  };

  const handleTweetSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tweet', { tweet });
      console.log(response.data);
    } catch (error) {
      console.error('Error posting tweet:', error);
    }
  };

  return (
    <form onSubmit={handleTweetSubmit}>
      <textarea
        value={tweet}
        onChange={handleTweetChange}
        placeholder="What's happening?"
        rows={4}
        cols={50}
      />
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetBox;
