const express = require('express')
const app = express();
const jwt = require('jsonwebtoken');
app.get('/', (req,res)=>{
    res.send('Hello World!');

    var token = jwt.sign({
        test: "test"
    },
    "secretkey",
    {
        subject: "PangYeon jwtToken",
        expiresIn: '60m', 
        issuer: "pangyeon"
    }
    );
    console.log("토큰생성 :", token)
})


app.listen(3000,()=>{
    console.log("Server is running to localhost:3000..");
})