# http-endpoint-nodemailer

Simplest possible http endpoint -> email. 

For example: for fixing contact forms when generating a static wordpress site

Submitted html->body must survive JSON.stringify. 
The default template formats the full submitted JSON, but a handlebars template can format the email using specific known values.

## TL;DR

```bash
TODO        $ helm repo add 
TODO        $ helm install my-release <>
```

## Prerequisites

TODO?   - Kubernetes 1.12+
- Helm 3.0-beta3+

## Test or Explore
    helm install nodemailer-test --dry-run --debug ./helm/http-endpoint-nodemailer
    helm get manifest nodemailer-test

## Installing the Chart

To install the chart with the release name `my-release`:

TODO same from tldr

> **Tip**: List all releases using `helm list`

## Uninstalling the Chart

To uninstall/delete the `my-release` deployment:

```bash
$ helm delete my-release
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Parameters

The following tables lists the configurable parameters of the NGINX chart and their default values per section/component:


### Common parameters

| Parameter                               | Description                                                | Default                                                 |
|-----------------------------------------|------------------------------------------------------------|---------------------------------------------------------|
| `nameOverride`                          | String to partially override nginx.fullname                | `nil`                                                   |
| `fullnameOverride`                      | String to fully override nginx.fullname                    | `nil`                                                   |

### config parameters

| Parameter                               | Description                                                                              | Default                                                 |
|-----------------------------------------|------------------------------------------------------------------------------------------|---------------------------------------------------------|

| `config.default.mail.body`              | Handlebars template to format email                                                      | all form values                                                  |
| `config.default.resultPage`             | html to show upon success                                                                | Indicates success                                                 |
| `config.default.errorPage`              | html to show upon error                                                                  | Indicates error                                                   |
| All configuration required              | Self explanatory                                                                         |                                                       |


            TODO figure out a helm repository    

Download the default values to use as example:
    helm repo add bitnami https://charts.bitnami.com/bitnami
    #download to use values.yaml as example file
    helm pull bitnami/wordpress --untar

```bash
$ helm install my-release -f values.yaml bitnami/nginx
```

### Change version

To modify the version used in this chart you can specify a TODO link [valid image tag](https://hub.docker.com/r/bitnami/nginx/tags/) using the `image.tag` parameter. For example, `image.tag=X.Y.Z`. This approach is also applicable to other images like exporters.


TODO test the development configuration? or dont care
### Adding extra environment variables

In case you want to add extra environment variables (useful for advanced operations like custom init scripts), you can use the `extraEnvVars` property.

```yaml
extraEnvVars:
  - name: LOG_LEVEL
    value: error
```

Alternatively, you can use a ConfigMap or a Secret with the environment variables. To do so, use the `extraEnvVarsCM` or the `extraEnvVarsSecret` values.

TODO mention ingress? or leave it up to user
### Ingress

This chart provides support for ingress resources. If you have an ingress controller installed on your cluster, such as [nginx-ingress-controller](https://github.com/bitnami/charts/tree/master/bitnami/nginx-ingress-controller) or [contour](https://github.com/bitnami/charts/tree/master/bitnami/contour) you can utilize the ingress controller to serve your application.

To enable ingress integration, please set `ingress.enabled` to `true`.

TODO some simple kubectl commands like logs
## Troubleshooting

Find more information about how to deal with common errors related to Bitnami’s Helm charts in [this troubleshooting guide](https://docs.bitnami.com/general/how-to/troubleshoot-helm-chart-issues).