const express = require('express')
const app = express();
const jwt = require('jsonwebtoken');
app.get('/', (req,res)=>{
    res.send('Hello World!');

    var token = jwt.sign(
    {
        test: "test" //payload
    },
    "secretkey", //secreate key
    {
        subject: "PangYeon jwtToken",  // opriotns
        expiresIn: '60m',              // 토큰에 대한 여러가지 정보를 설정한다.
        issuer: "pangyeon"             // expiresin, issuerm, subject
    }
    );
    console.log("토큰생성 :", token)
})


app.listen(3000,()=>{
    console.log("Server is running to localhost:3000..");
})