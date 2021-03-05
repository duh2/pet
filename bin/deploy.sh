#!/usr/bin/env bash

HOST="195.201.216.19"
DOC_ROOT="/var/www/html/$HOST"
PASS=""
echo 'creating archive'
pushd C:/Users/duh/IdeaProjects/pet1/tmp
tar -czvf site.tar.gz C:/Users/duh/IdeaProjects/pet1/;
popd
scp -i C:/Users/duh/.ssh/id_rsa C:/Users/duh/IdeaProjects/pet1/tmp/site.tar.gz root@195.201.216.19:/var/www/temp
ssh root@195.201.216.19'
 rm-rf /var/www/html/*
 cd /var/www/temp
 tar -C /var/www/html -xzvf site.tar.gz --strip-components=4
 rm site.tar.gz
'




#tar -xzvf site.tar.gz --strip-components=4