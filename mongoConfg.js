
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Movies:StartUp1122@movie.asfrf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Done")
  // perform actions on the collection object
  client.close();
});