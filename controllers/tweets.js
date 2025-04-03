const Tweets = require('../Database/tweets');

class TweetController {
    constructor(service) {
        this.service = service;
    }

    async getTweets() {
        const tweets = await this.service.getAllTweets();
        return tweets.filter(tweet => tweet.id % 2 === 0);
    }
}

module.exports = TweetController;
