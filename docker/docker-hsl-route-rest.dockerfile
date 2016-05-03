FROM node:latest

MAINTAINER Pasi Heinonen

ENV NODE_ENV=production
ENV PORT=3030

COPY ../hsl-route-rest /var/www/hsl-route-rest
WORKDIR /var/www/hsl-route-rest

RUN npm install
EXPOSE $PORT

ENTRYPOINT ["npm", "start"]
