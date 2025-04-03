const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

class Tweets{

    constructor(db){
        this.db = db;
    }

    async getAllTweets(){
        return [1,2,3,4,5,6,7,8,9,10];
    }

    async getTweetById(id){}

    async updateTweet(){}

    async updateTweet(){}



}

module.exports = new Tweets(pool);

