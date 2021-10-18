const mongoose = require("mongoose");

// See the steps in readme.md to connect to momgodb atlas cluster and generate the url string for connecting application
const mongoAtlasUri = "<Mongodb cluster URL to connect your application>"; 
//eg: "mongodb+srv://<username>:<password>@clusterastro.vyrzt.mongodb.net/astroDatabase?retryWrites=true&w=majority"

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connnecting to database'));

db.once('open', function(){
    console.log("Connected to database successfully ");
});

module.exports = db;
