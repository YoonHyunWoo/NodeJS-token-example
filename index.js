const express = require('express')
const app = express();
const router = express.Router();
const createtoken = require('./createtoken.js');

app.use('/', createtoken);

app.use('/')
app.listen(3000,()=>{
    console.log("server is running to http://localhost:3000");
})