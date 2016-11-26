FROM nginx:latest
MAINTAINER Jesse Bowden <jesse@gemr.com>
RUN rm /bin/sh && ln -sf /bin/bash /bin/sh
RUN sed -i 's/^mesg n$/tty -s \&\& mesg n/g' /root/.profile

# Declare constants
ENV NVM_VERSION v0.32.1
ENV NODE_VERSION 7.1.0

ENV NVM_DIR /usr/local/nvm
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/v$NODE_VERSION/bin:$PATH

# Install pre-reqs
RUN apt-get update && apt-get install -y curl build-essential npm git gettext

# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/creationix/nvm/$NVM_VERSION/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

COPY    ./ops/nginx.conf /etc/nginx/nginx.conf

COPY . /frontend


RUN ["/bin/bash", "-c", "cd /frontend; source ~/.profile; npm install"]

WORKDIR /frontend

RUN ["/bin/bash", "-c", "cd /frontend; source ~/.profile; npm run build"]


COPY ./dist /var/www
WORKDIR /var/www



RUN ["/bin/bash", "-c", "cd /var/www && ls"]
RUN ["/bin/bash", "-c", "cd /var/www && rm -rf /var/frontend"]
RUN ["/bin/bash", "-c", "mkdir /logs && echo -n > /logs/access.log"]

VOLUME ["/etc/nginx"]

#setup the port
EXPOSE  3001
EXPOSE  3002
