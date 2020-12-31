const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");

var server = require('./sendEmail');

var yaml = require('node-yaml-config');
config = yaml.load(__dirname + '/config.yml');
console.log(config); 

const app = express();
app.set('views', __dirname + '/views/');
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("health ok");
  });
app.post(config.submitPath, server.sendEmail );
app.listen(config.submitPort, () => console.log("Server started..."));