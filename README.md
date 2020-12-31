# Nodemailer Contact Form

Node.js/Express app using Nodemailer to send emails, from static http POST

For example: fixing contact forms when generating a static wordpress site using WP2static plugin and WPServerless forms plugin

app.js
    GET /  (root) results in "health ok"
    POST /send (configurable path) takes form parameters, encodes as JSON, sends email using handlebars template
appWithTestPage.js
    GET /  (root) results in a fancy static contact form, that submits to /send
    POST /send (configurable path) takes form parameters, encodes as JSON, sends email using handlebars template
    
Configuration:
TODO
    Default email template:
        <p>Form submission</p>
        <p>{{{json body}}}</p>
    If you know exact form elements:
        <p>Form submission</p>
        <p>{{{body.email}}}</p>

Docker instructions:
    docker build -t cdeadspine/nodemailer-contact-form .
    docker run -p 49160:8080 -d cdeadspine/nodemailer-contact-form
    docker ps
    docker exec -it 748202bdf918 /bin/ash     #notice the different shell in ALPINE
    apk update
    apk add vim
    vim config.yml
    exit
    docker restart 748202bdf918
    .\powershellTest.ps1 -port 49160
    
    #docker hub deployment (done by maintainer not end user)
    docker images
    #based on package.json:version    
    docker tag cdeadspine/nodemailer-contact-form:latest cdeadspine/nodemailer-contact-form:1.0.1
    docker push cdeadspine/nodemailer-contact-form:1.0.1
    docker push cdeadspine/nodemailer-contact-form:latest


Helm instructions:
    helm lint ./helm/http-endpoint-nodemailer
    helm package ./helm/http-endpoint-nodemailer

    GET /  (root) results in "health ok"
    POST /send (configurable path) takes form parameters, encodes as JSON, sends email using handlebars template

## Install Dependencies

```bash
npm install
```

## Run

```bash
node ./app.js
or
node ./appWithTestPage.js
```


TODO
 not a lot of testing
 security?
 cross domain / CORS requirements?
 reCaptcha?
 redirect after completion url, delay seconds? should the success/failure be separate static paths for caching purposes?
