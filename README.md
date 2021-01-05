# Nodemailer Contact Form

Node.js/Express app using Nodemailer to send emails, from static http POST

For example: fixing contact forms when generating a static wordpress site using WP2static plugin and WPServerless forms plugin

app.js
* GET /  (root) results in "health ok"
* POST /send (configurable path) takes form parameters, encodes as JSON, sends email using handlebars template

appWithTestPage.js
* GET /  (root) results in a fancy static contact form, that submits to /send
* POST /send (configurable path) takes form parameters, encodes as JSON, sends email using handlebars template
    
Configuration:
* debugRequests: true
  * This would output debugging information for each request: headers, body pre and post middleware encoding (json, urlencode, multipart)
    * stdout
    * docker logs <running container>
    * kubectl logs <running pod>
* resultPage:
  * html returned on successful submission
* errorPage:
  * html returned upon failure of any type (can't connect to smtp)
* mail: ->     
  * body: | #handlebars template, default json formats entire form submission (up to 2000 key:value pairs via multer (no files allowed), 100kb via 
            x-www-form-urlencoded)
```
        <p>Form submission</p>
        <p>{{{json body}}}</p>  
        If you know exact form elements:
            <p>Form submission</p>
            <p>{{{body.email}}}</p>
```            

Docker instructions:
```
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
```
```    
    #docker hub deployment (done by maintainer not end user)
    docker images
    #based on package.json:version    
    docker tag cdeadspine/nodemailer-contact-form:latest cdeadspine/nodemailer-contact-form:1.0.1
    docker push cdeadspine/nodemailer-contact-form:1.0.1
    docker push cdeadspine/nodemailer-contact-form:latest
```
```
    #troubleshoot
    docker run -it cdeadspine/nodemailer-contact-form /bin/ash
```
Helm instructions:
```
    see ./helm/README.md
```
#testing
```    
    helm uninstall nodemailer-test
    helm install nodemailer-test ./helm/http-endpoint-nodemailer
    kubectl get all
    kubectl exec --stdin --tty pod/nodemailer-test-http-endpoint-nodemailer-55778c8675-zhfp2 -- /bin/ash
```

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
 testing
 security?
 cross domain / CORS requirements?
 reCaptcha?
 redirect after completion url, delay seconds? should the success/failure be separate static paths for caching purposes?
