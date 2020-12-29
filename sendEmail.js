const nodemailer = require("nodemailer");
var hbs = require('nodemailer-express-handlebars');
const exphbs = require("express-handlebars");
var yaml = require('node-yaml-config');
config = yaml.load(__dirname + '/config.yml');
var templatePath = __dirname + '/views'

let transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.smtp.auth.user, 
    pass: config.smtp.auth.pass 
  },
  tls: {
    rejectUnauthorized: false
  }
});
let opts = {
  viewEngine: {
    partialsDir: __dirname + "/views/partials",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout:false,
    helpers : {
      json: function(ctx){
        return JSON.stringify(ctx);
      }
    }
  },
  viewPath: "views",
  
};
var hbar = require('handlebars');
var template = hbar.compile(config.mail.body)
hbar.registerHelper("json", function(ctx){
  return JSON.stringify(ctx);
});
transporter.use('compile', hbs(opts));

module.exports = {
  sendEmail : function (req, res) {
      
      let mailOptions = {
        from: config.mail.from,
        to: config.mail.to, 
        subject: config.mail.subject, 
        html: template({
          body: req.body
        })//couldn't figure out how to use template : object (instead of a file on disk)
      };

      transporter.sendMail(mailOptions, (error, info) => {        
        if (error) {
          res.send(config.errorPage);
          console.log(error);
          return
        }
        console.log("Message sent: %s", info.messageId);
        res.send(config.resultPage);
      });        
  }
};