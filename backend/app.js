const express = require("express");
const app = express();
const meetingsRouter = require("./routes/meetings");
const port = 8081;

// Setup database
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const database = "mongodb://root:example@mongo:27017";
mongoose.connect(database, { useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', () => console.log("Mongo Error"));

// Initialise Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send();
});

app.listen(port, () => {
    console.log("App running on port " + port);
});

app.use('/meeting/', meetingsRouter);

module.export = app;