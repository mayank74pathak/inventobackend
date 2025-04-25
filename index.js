const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const connectToMongo = require('./db');
connectToMongo(); // Connect to MongoDB

const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./Routes/router');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(router);

// Dynamic port for deployment (Render, Vercel, etc.)
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


