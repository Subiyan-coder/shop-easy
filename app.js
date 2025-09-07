const express = require('express');
const app = express();
const port = 3000;
const name = "Your";

app.get('/', (req, res) => {
  const message = `Welcome ${name} Page!`;
  res.send(message);
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

module.exports = {app, server, name}