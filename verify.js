const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken')
const secretKey = require('./config/jwt.js')
var cookieParser = require('cookie-parser')
app.use(cookieParser())
router.post('/', (req,res)=>{
    var qq = req.headers.cookie
    var token = qq.substring(4)
    console.log(token)
    jwt.verify(token, secretKey, (error, decoded)=>{
        if(error){
            console.log(`에러가 났습니다\n ${error}`);
        }
        console.log(decoded);
        res.send(decoded);
    })
}) 

module.exports=router;