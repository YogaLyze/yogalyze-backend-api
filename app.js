const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to Yogalyze Server');
});

app.listen(port, () => {
  console.log(`Listening on http://locahost:${port}`);
});
