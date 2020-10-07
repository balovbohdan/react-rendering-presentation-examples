const express = require('express');
const cors = require('cors');
const babelCore = require('@babel/core');
const bodyParser = require('body-parser');

const port = 1234;
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

app.post('/parse', (req, res) => {
  babelCore.transform(req.body.code, {
    presets: ['@babel/preset-react'],
    plugins: ['@babel/plugin-transform-react-jsx'],
  }, (error, result) => {
    if (error) {
      res.status(500).end();
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
