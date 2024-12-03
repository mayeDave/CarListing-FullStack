require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const carRoutes = require('./routes/carRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cors = require('cors');
connectDB();
const app = express();
// middleware
app.use(cors());
// http://localhost:5173
app.use(cors({ 
    origin: 'http://localhost:5174'  //allow only this origin
 }));
app.use(express.json());
// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/reviews', reviewRoutes);
// Set up the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});