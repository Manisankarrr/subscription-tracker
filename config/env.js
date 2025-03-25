import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {PORT, NODE_ENV, DB_URI  } = process.env;

// // Correctly export PORT and NODE_ENV with defaults
// export const PORT = process.env.PORT || 5500;
// export const NODE_ENV = process.env.NODE_ENV || 'development';
// export const DB_URI = process.env.DB_URI ||'mongodb://localhost:27017/subscription-tracker';
