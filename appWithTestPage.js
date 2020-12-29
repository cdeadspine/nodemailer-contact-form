const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");

var server = require('./sendEmail');
const app = express();

var yaml = require('node-yaml-config');
config = yaml.load(__dirname + '/config.yml');
console.log(config); 

app.engine("handlebars", exphbs());
app.set('views', __dirname + '/views/');
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("contact");
});

app.post(config.submitPath, server.sendEmail );

app.listen(config.submitPort, () => console.log("Server started..."));
