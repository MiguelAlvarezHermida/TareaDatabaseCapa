import express from 'express';
import tweetHttpHandler from '.../handlers/tweets.js';

const router = express.Router();

const  tweetHttpHandler = new TweetHttpHandler();

router.get('/', tweetHttpHandler.getAllTweets());
router.get('/:id', tweetHttpHandler.getTweetById());
router.put('/:id', tweetHttpHandler.updateTweet());
router.delete('/:id', tweetHttpHandler.deleteTweet());

export default router;