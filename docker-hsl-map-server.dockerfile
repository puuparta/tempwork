FROM node:latest

MAINTAINER Pasi Heinonen

ENV NODE_ENV=production
ENV PORT=3000

COPY ./hsl-map-server /var/www/hslmapserver
WORKDIR /var/www/hslmapserver

RUN npm install
EXPOSE $PORT

ENTRYPOINT ["npm", "start"]
