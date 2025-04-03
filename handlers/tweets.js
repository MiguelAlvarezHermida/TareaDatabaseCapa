import { Request, Response, NextFunction } from 'express';
import Tweets from '../controllers/tweets.js'; 

const tweetController = new tweetController();

class TweetHttpHandler {

    async getTweets(req = Request, res = Response, next = NextFunction) {
        try {
            const tweets = await this.getTweets();
            res.json(tweets);
        } catch (error) {
            next(error);
        }
    }

    async getTweetById(req = Request, res = Response, next = NextFunction) {

}

    async updateTweet(req = Request, res = Response, next = NextFunction) {

    }

    async deleteTweet(req = Request, res = Response, next = NextFunction) {

    }

}

module.exports = new TweetHttpHandler();