const express = require('express');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware');

const app = express();
const port = 3000;

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const proxyOptions = {
  target: "/",
  changeOrigin: true,
  router: {
    "/amenities": "http://localhost:3003"
  },
}

const theProxy = proxy(proxyOptions);

app.use(express.static(__dirname + '/public'));

app.get('/:itemID', (req, res) => {
  // res.redirect(`/index.html?itemID=${req.params.itemID}`);
});

app.use(theProxy);

app.listen(port, () => {
  console.log(`I'm serving from http://localhost:${port}`);
});