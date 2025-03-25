import express from 'express'; 
import { PORT } from './config/env.js';

import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import userRouter from './routes/user.routes.js';
import connecttoDatabase from './database/mongodb.js';

const app = express();

// like middleware
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)
app.use('/api/v1/users', userRouter)

// api/v1/auth/signup

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

    connecttoDatabase();
});


export default app;
