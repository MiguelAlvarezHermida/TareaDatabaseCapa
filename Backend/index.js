import express from 'express';
import tweets from './routes/tweets.js';
import users from './routes/users.js';

const app = express();
app.use(express.json());

app.use('/tweets', tweets);
app.use('/users', users);

const Port = process.env.PORT || 3000;
app.listen(Port, () => console.log(`Listening on port ${Port}`));