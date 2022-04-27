const express = require("express");
const colors = require('colors');
const app = express();
const port = 80;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("*", (req, res) => {
  res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(port, () => console.log(`listening on port ${port}!`.green));

module.exports = app;
