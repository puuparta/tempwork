FROM node:latest

MAINTAINER Pasi Heinonen

ENV NODE_ENV=production
ENV PORT=3030

COPY ./hsl-route-rest /var/www
WORKDIR /var/www

RUN npm install
EXPOSE $PORT

ENTRYPOINT ["npm", "start"]
