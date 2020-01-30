const path = require('path');
const express = require('express');
const server = require('../server');

const app = express();
const port = 3000;

app.disable('x-powered-by');

server(app);

app.use(express.static(path.resolve(__dirname, '../build'), {
  dotfiles: 'ignore',
  etag: true,
  index: [
    'index.html',
    'index.htm',
  ],
  maxAge: 0,
  redirect: true,
}));

app.listen(port, () => {
  console.log(`Test app listening on port ${port}!`);
});
