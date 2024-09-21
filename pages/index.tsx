// pages/index.js
import React from 'react';
import TweetBox from '../components/TweetBox';
import TwitterLogin from '../components/TwitterLogin';

const Home = () => {
  return (
    <div>
      <h1>Post-Only Twitter/𝕏</h1>
      <h2>for those who only want to scream into the void</h2>
      <TwitterLogin />
      <TweetBox />
    </div>
  );
};

export default Home;
