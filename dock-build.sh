#!/usr/bin/env bash
#first build docker (if still not published): docker build --tag=9cigithubio .scripts/. 
set -e

#for local runs put your docker name
docker run -it --rm --name=9cicomlocal-serve --volume="$PWD:/srv/jekyll" -p 3000:3000 -p 3001:3001 9cigithubio /bin/sh .scripts/build.sh

