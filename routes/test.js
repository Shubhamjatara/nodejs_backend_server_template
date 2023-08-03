
//prebuilt basic route

const bodyParser = require("body-parser");
const express = require("express");
const testrouter = express.Router();
testrouter.use(bodyParser.json());

const route = testrouter.route("/api/test");
route.get(async (req, res) => {
  
    try{
     return   res.status(200).send(JSON.stringify({isSuccess:true,data:{key:'value'}}));
    }

    catch(err)
    {
        console.log(err.massage);
      return  res.status(500).send(JSON.stringify({isSuccess:false}));
    }
    
  }
);

module.exports = testrouter;
