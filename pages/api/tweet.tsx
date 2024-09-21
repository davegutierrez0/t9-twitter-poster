// pages/api/tweet.js
import { TwitterApi } from 'twitter-api-v2'; // Install this library for easier interaction with Twitter

const client = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { tweet } = req.body;

    try {
      const response = await client.v1.tweet(tweet);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: 'Error posting tweet' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
