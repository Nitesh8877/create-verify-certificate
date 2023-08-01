const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors=require('cors')

// Middleware
app.use(bodyParser.json());
app.use(cors())
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/certificate");
app.use(express.json());
const db=mongoose.connection
db.on("error",()=>console.log("Can't connect to DB"));
db.once("open",()=>
{
    console.log("Connected to mongo DB");

})
// Routes
require('./route')(app);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
