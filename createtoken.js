const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const router = express.Router();
  const secretKey = require('./config/jwt')
const SECRET_KEY = secretKey;


// POST /login 요청 body에 id와 password를 함께 실어서 요청으로 가정 (사실 id와 password는 암호화 되어있음)
router.post('/login', (req, res, next) => {

  //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
  const nickname = "Yoon Hyun Woo";

  //jwt.sign(payload, secretOrPrivateKey, [options, callback])
  token = jwt.sign({
    type: 'JWT',
    nickname: nickname,
  }, SECRET_KEY, {
     // 만료시간 15분
    issuer: 'yhw',
  });

  //response
  res.cookie('jwt',token)
  return res.status(200).json({
    code: 200,
    message: '토큰이 발급되었습니다.',
    jwt: token
  });
});

module.exports = router;