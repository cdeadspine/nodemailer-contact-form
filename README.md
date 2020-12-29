# Nodemailer Contact Form

Node.js/Express app using Nodemailer to send emails, from static http POST

For example: fixing contact forms when generating a static wordpress site using WP2static plugin and WPServerless forms plugin

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
    docker build -t cdeadspine/nodemailer-contact-form . #TODO when do i need --no-cache
    docker run -p 49160:8080 -d cdeadspine/nodemailer-contact-form
    docker ps
    docker exec -it 748202bdf918 /bin/ash     #notice the different shell in ALPINE
    apk update
    apk add vim
    vim config.yml
    exit
    docker restart 748202bdf918
    .\powershellTest.ps1 -port 49160



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