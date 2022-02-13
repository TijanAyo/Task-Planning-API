const express = require('express');
const connectDB = require('./config/db');
const app = express()

require('dotenv').config()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// route
const goalroute = require('./routes/goalRoutes');

// Using route
app.use(goalroute);

// connecting to mongoDB
connectDB();

app.listen(process.env.PORT || 5000);