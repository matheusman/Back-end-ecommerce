FROM node

RUN apk add --no-cache bash

RUN npm install -g @nest/cli

USER node

WORKDIR /home/node/app
