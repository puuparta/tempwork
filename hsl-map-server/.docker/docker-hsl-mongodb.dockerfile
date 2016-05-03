FROM mongo:latest

MAINTAINER Pasi Heinonen

RUN apt-get update && apt-get install -y netcat-traditional netcat-openbsd

# pre generated database
COPY ./mongo/db /db

EXPOSE 27017

ENTRYPOINT ["mongod", "--smallfiles", "--dbpath", "db/"]