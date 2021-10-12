const express = require('express')
const app = express();
const port = 8000;
const db = require('./config/mongoose')
const path = require("path");

// middleware to take data from json and encoded format
app.use(express.json());
app.use(express.urlencoded());

//setting up routes
app.use('/', require("./routes"));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// express engine listening to port
app.listen(port, function(err){
    if(err){
        console.log("Error starting the server -- ", err);
        return;
    }

    console.log("The server is up and running at port - ", port);

})