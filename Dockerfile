FROM node

WORKDIR /e2e

ADD ./package.json ./package.json
ADD ./package-lock.json ./package-lock.json

ADD ./config ./config
ADD ./tests ./tests

RUN npm install