const express = require("express");
const bodyParser = require("body-parser");
//const mongoose = require("mongoose");

const app = express();

//var corsOptions = {
//  origin: "http://localhost:8082"
//};

//app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "index de la app" });
});

// set ports
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require('./model');

//conexion to cloud
//user: javier
  //pss: 1234q
  //db: test
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://javier:1234q@cluster0.v5jak.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {    
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//una vez que tnemos conexion nos conectamos
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
  })


  /*
//const mongoose = require('mongoose');
db.mongoose
  //.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
  .connect('mongodb://localhost:27017/test', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
*/

  require("./auth")(app);

  
