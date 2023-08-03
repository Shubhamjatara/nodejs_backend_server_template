const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();


//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
//routes

app.use(require('./routes/test')); // "localhost:4000/api/test" hit request on this route 

//listening server
  app.listen(4000,()=> console.log('Server listening...'))