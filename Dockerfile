FROM us.gcr.io/icanhelpyouwiththat-149304/nginx-npm:latest
MAINTAINER Jesse Bowden <jesse@gemr.com>

COPY    ./ops/nginx.conf /etc/nginx/nginx.conf
COPY    ./ops/sites-enabled /etc/nginx/sites-enabled
COPY . /frontend


RUN ["/bin/bash", "-c", "cd /frontend; source ~/.profile; npm install; npm rebuild node-sass"]

WORKDIR /frontend

RUN ["/bin/bash", "-c", "cd /frontend; source ~/.profile; npm run build:aot"]

WORKDIR ./dist

COPY . /var/www
WORKDIR /var/www

RUN ["/bin/bash", "-c", "cp /frontend/dist/assets /var/www/assets"]
RUN ["/bin/bash", "-c", "cp /frontend/dist/* /var/www"]
RUN ["/bin/bash", "-c", "cd /var/www && ls"]
RUN ["/bin/bash", "-c", "cd /var/www && rm -rf /var/frontend"]
RUN ["/bin/bash", "-c", "mkdir /logs && echo -n > /logs/access.log"]

VOLUME ["/etc/nginx"]

#setup the port
EXPOSE  3001 3002 1111

