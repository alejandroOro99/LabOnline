const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const loginRoute = require('./routes/login');
const localsRoute = require('./routes/locals');

app.use('/login',loginRoute);
app.use('locals',localsRoute);
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome');
});
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION//use .env file for url hiding of database connection
    , { useNewUrlParser: true }, () => {
        console.log('connected to DB');
    }
);