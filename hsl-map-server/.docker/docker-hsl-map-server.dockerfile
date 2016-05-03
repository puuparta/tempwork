FROM node:latest

MAINTAINER Pasi Heinonen

ENV NODE_ENV=production
ENV PORT=3000

COPY ./hsl-map-server /var/www
WORKDIR /var/www

RUN npm install
EXPOSE $PORT

ENTRYPOINT ["npm", "start"]
