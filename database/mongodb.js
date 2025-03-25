import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';

if(!DB_URI)
{
    throw new Error('DB_URI is not defined check .env.<d/p>.local');
}

const connecttoDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`MongoDB Connected:  in ${NODE_ENV} mode`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connecttoDatabase;