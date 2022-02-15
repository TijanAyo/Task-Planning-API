const express = require('express');
const connectDB = require('./config/db');
const app = express()

require('dotenv').config()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// route
const goalroute = require('./routes/goalRoutes');
const userroute = require('./routes/userRoutes')

// Using route
app.use(goalroute);
app.use('/api', userroute);

// connecting to mongoDB
connectDB();

app.listen(process.env.PORT || 5000);