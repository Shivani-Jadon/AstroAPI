const mongoose = require("mongoose");

const mongoAtlasUri = "mongodb+srv://Shivani:12345@clusterastro.vyrzt.mongodb.net/astroDatabase?retryWrites=true&w=majority"


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