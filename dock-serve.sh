#first build docker (if still not published): docker build --tag=9cigithubio . 



#!/usr/bin/env bash

set -e

#for local runs put your docker name
docker run -it --rm --name=9ci-jekyll-serve --volume="$PWD:/srv/jekyll" -p 4000:4000 dock9/9cigithubio /bin/sh .scripts/jekyll-serve.sh
