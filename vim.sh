#!/bin/bash
printf '\e[3;0;0t']
printf '\e[8;57;159t']
PROJECT_ROOT="/Users/david/Projects/IMS/IMS/tests/tut/multivision"
cd $PROJECT_ROOT
echo `pwd`
vim -p server.js public/app/app.js public/app/account/* public/app/main/* public/app/common/* public/css/site.styl server/config/* server/includes/* server/views/*
