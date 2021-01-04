const express = require("express");
const bodyParser = require("body-parser");
var multer  = require('multer')

const exphbs = require("express-handlebars");
const path = require("path");

var server = require('./sendEmail');

var yaml = require('node-yaml-config');
config = yaml.load(__dirname + '/config.yml');
console.log(config); 

var upload = multer();

const app = express();
app.set('views', __dirname + '/views/');
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs());
app.use(bodyParser.urlencoded({ 
  extended: false, 
  limit: config.bodySizeLimit,
  verify: (req, res, buf) => {
      req.rawURLBody = buf
    }
}));
app.use(bodyParser.json({
  verify: (req, res, buf) => {
    req.rawJSONBody = buf
  }
}));
app.get("/", (req, res) => {
  res.render("contact");
});
app.post(config.submitPath, upload.none(), server.sendEmail );
// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(config.submitPort, () => console.log("Server started..."));