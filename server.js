
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Node.js and Express Server!");
});

app.get("/about", (req, res) => {
    res.status(200).json({
        name: "Anirudh Bandhela",
        section: "S-015"
    });
});

app.get("/time", (req, res) => {
    res.status(200).send(new Date().toString());
});

app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

const server = app.listen(PORT, "127.0.0.1", () => {
    console.log(`Express server listening at http://127.0.0.1:${PORT}`);
});

server.on("error", (err) => {
    console.error("Server error:", err.message);
});
