FROM node:latest

MAINTAINER Pasi Heinonen

ENV NODE_ENV=production
ENV PORT=3000

COPY ../hsl-map-server /var/www/hsl-map-server
WORKDIR /var/www/hsl-map-server

RUN npm install
EXPOSE $PORT

ENTRYPOINT ["npm", "start"]
