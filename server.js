const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

router.get('/companies', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api/v1/node', router);

app.listen(port);
