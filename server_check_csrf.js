const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/transfer", (req, res) => {
  if (req.query.token !== "hash_csrf_token") {
    res.send("Invalid request!");
    return;
  }

  res.send(`Success! Received ${req.body.amount}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "bank.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
