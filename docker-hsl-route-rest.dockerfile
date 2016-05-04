FROM node:latest

MAINTAINER Pasi Heinonen

ENV NODE_ENV=production
ENV PORT=3030

COPY ./hsl-route-rest /var/www/hslrouterest
WORKDIR /var/www/hslrouterest

RUN npm install
EXPOSE $PORT

ENTRYPOINT ["npm", "start"]
