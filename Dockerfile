FROM us.gcr.io/icanhelpyouwiththat-149304/nginx-npm:http2
MAINTAINER Jesse Bowden <jesse@gemr.com>

COPY    ./ops/nginx.conf /etc/nginx/nginx.conf
COPY    ./ops/sites-enabled /etc/nginx/sites-enabled
COPY . /frontend


RUN ["/bin/bash", "-c", "cd /frontend; source ~/.profile; npm install; npm rebuild node-sass"]

WORKDIR /frontend

RUN ["/bin/bash", "-c", "cd /frontend; source ~/.profile; npm run build:aot"]

COPY . /var/www
WORKDIR /var/www
RUN ["/bin/bash", "-c", "cd /var/www && ls"]
RUN ["/bin/bash", "-c", "cd /var/www && cp -r /frontend/dist/* /var/www"]
RUN ["/bin/bash", "-c", "cd /var/www && rm -rf /var/frontend"]

VOLUME ["/etc/nginx"]

#setup the port
EXPOSE  3001 3002 1111

