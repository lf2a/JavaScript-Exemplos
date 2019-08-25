const express = require('express');
const cors = require('cors');
var jwt = require('jsonwebtoken');

const app = express();

const secret = "secrett";

function verifyJWT(req, res, next) {
  var token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({
    auth: false,
    message: 'No token provided'
  });

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(500).send({
      auth: false,
      message: 'Failed to authenticate token'
    });

    req.userId = decoded.id;
    next();
  });
}

app.post('/login', (req, res, next) => {

  if (req.headers.user === 'luiz' && req.headers.pwd === '123') {

    const id = 12;
    var token = jwt.sign({
      id
    }, secret, {
      expiresIn: 300
    });

    res.status(200).send({
      auth: true,
      token: token,
      id
    });
  } else {
    res.status(500).send('Login inválido!');
  }
})

app.get('/logout', (req, res) => {
  res.status(200).send({
    auth: false,
    token: null
  });
});

app.get('/users', verifyJWT, (req, res, next) => {
  res.json({
    status: "ok"
  })
})

app.get('/products', verifyJWT, (req, res, next) => {
  res.json({
    status: "ok"
  })
})

app.use(cors());
app.use(express.json());

app.listen(3009, () => {
  console.log('ok');
});