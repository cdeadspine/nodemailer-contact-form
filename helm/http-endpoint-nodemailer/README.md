# http-endpoint-nodemailer

Simplest possible http endpoint -> email. 

For example: fixing contact forms when generating a static wordpress site using WP2static plugin and WPServerless forms plugin

Submitted html->body must survive express->(json encoding, urlencoding, multer (multipart) encoding). 
The default template formats the full submitted form as JSON, but a handlebars template can format the email using specific known values.

## TL;DR

```bash
$ helm repo add cdeadspine 'https://raw.githubusercontent.com/cdeadspine/nodemailer-contact-form/master/helm'
$ helm repo update
#download to use values.yaml as example file
$ helm pull cdeadspine/http-endpoint-nodemailer --untar
# copy values.yaml to your root directory and edit config
$ helm install my-release -f .\MyValues.yaml cdeadspine/http-endpoint-nodemailer -n staging
```

## Prerequisites

- Kubernetes
- Helm 3

## Test or Explore
- helm install nodemailer-test --dry-run --debug cdeadspine/http-endpoint-nodemailer
- helm get manifest nodemailer-test

## Installing the Chart

To install the chart with the release name `my-release`:

helm install my-release -f .\MyValues.yaml cdeadspine/http-endpoint-nodemailer -n staging

> **Tip**: List all releases using `helm list`

## Uninstalling the Chart

To uninstall/delete the `my-release` deployment:

```bash
$ helm delete my-release
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Parameters

The following tables lists the configurable parameters


### Common parameters

| Parameter                               | Description                                                | Default                                                 |
|-----------------------------------------|------------------------------------------------------------|---------------------------------------------------------|
| `nameOverride`                          | String to partially override fullname                | `nil`                                                   |
| `fullnameOverride`                      | String to fully override fullname                    | `nil`                                                   |

### config parameters

| Parameter                               | Description                                                                              | Default                                                 |
|-----------------------------------------|------------------------------------------------------------------------------------------|---------------------------------------------------------|

| `config.default.mail.body`              | Handlebars template to format email                                                      | all form values                                                  |
| `config.default.resultPage`             | html to show upon success                                                                | Indicates success                                                 |
| `config.default.errorPage`              | html to show upon error                                                                  | Indicates error                                                   |
| All configuration required              | Self explanatory                                                                         |                                                       |


Download the default values.yaml to use as example:
- helm repo add cdeadspine 'https://raw.githubusercontent.com/cdeadspine/nodemailer-contact-form/master/helm'
- helm repo update
- #download to use values.yaml as example file
- helm pull cdeadspine/http-endpoint-nodemailer --untar

```bash
$ helm install my-release -f .\MyValues.yaml cdeadspine/http-endpoint-nodemailer -n staging
```

### Ingress
Set up your ingress to 
* config.default.submitport (default 8080)
* config.default.submitPath  (default /send)

### Change version

To modify the version used in this chart visit [valid image tag](https://hub.docker.com/repository/docker/cdeadspine/nodemailer-contact-form/tags) 
use the `image.tag` parameter.

## Troubleshooting
values.yaml:
* config.default.debugRequests = true
  * This prints http requests to logs
  * kubectl logs <pod>