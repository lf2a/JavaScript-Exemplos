var http = require('http');
const express = require('express');
const cors = require('cors');
const httpProxy = require('express-http-proxy')
require("dotenv-safe").load();
var jwt = require('jsonwebtoken');
const app = express()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

const userServiceProxy = httpProxy('http://localhost:3001');
const productsServiceProxy = httpProxy('http://localhost:3002');

function verifyJWT(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

app.get('/users', verifyJWT, (req, res, next) => {
  userServiceProxy(req, res, next);
})

app.get('/products', verifyJWT, (req, res, next) => {
  productsServiceProxy(req, res, next);
})

app.post('/login', (req, res, next) => {
  if (req.body.user === 'luiz' && req.body.pwd === '123') {
    //auth ok
    const id = 1; //esse id viria do banco de dados
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300 // expires in 5min
    });
    res.status(200).send({ auth: true, token: token });
  }

  res.status(500).send('Login inválido!');
})

app.get('/logout', function (req, res) {
  res.status(200).send({ auth: false, token: null });
});

app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var server = http.createServer(app);
server.listen(3000);