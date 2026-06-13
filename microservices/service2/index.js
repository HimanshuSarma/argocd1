const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors()); // Defaults to origin: '*'

app.get('/', (req, res) => {
  res.send('Service2 Hello World v1!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
