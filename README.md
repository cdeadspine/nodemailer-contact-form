# Nodemailer Contact Form

Node.js/Express app using Nodemailer to send emails, from static http POST

TODO
    add redirect after completion url, delay seconds

Configuration:
TODO
    Default email template:
        <p>Form submission</p>
        <p>{{{json body}}}</p>
    If you know exact form elements:
        <p>Form submission</p>
        <p>{{{body.email}}}</p>

Docker instructions:
TODO

Helm instructions:
    helm lint ./helm/http-endpoint-nodemailer
    helm package ./helm/http-endpoint-nodemailer

## Install Dependencies

```bash
npm install
```

TODO nodemon install?
## Run

```bash
node app.js
```


TODO
 not a lot of testing
 security?
 cross domain / CORS requirements?