

const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("Welcome to my Node.js and Express server!");
});


app.get("/about", (req, res) => {
  res.json({
    name: "Anirudh Bandhela",
    section: "S-15"
  });
});

app.get("/time", (req, res) => {
  res.json({
    currentTime: new Date().toString()
  });
});

app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express server listening on port ${PORT}`);
});
