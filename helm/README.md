# helm-repo-in-github
(from https://github.com/kmzfs/helm-repo-in-github)
This is a sample for how to setup a helm repo in github

# Adding a new version or chart to this repo

```bash
$ helm package .\http-endpoint-nodemailer\ # build the tgz file and copy it here
$ helm repo index . # create or update the index.yaml for repo
```

# How to use it as a helm repo

You might know github has a raw view. So simply use the following:

```bash
$ helm repo add cdeadspine 'https://raw.githubusercontent.com/cdeadspine/nodemailer-contact-form/master/helm'
$ helm repo update
$ helm search repo nodemailer
NAME                                    CHART VERSION   APP VERSION     DESCRIPTION
cdeadspine/http-endpoint-nodemailer     1.0.1           4.17.1          NodeJS Express http endpoint, accepting form su...
```