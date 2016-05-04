
## Prerequisites

- mongodb
- nodejs, 0.10.31 or newer

## Services

### Mongodb 
  - listening default port 27017
  - just hosting some GTFS converted static data like routes which is used now
  
### hsl-route-rest
  - tiny REST API to get list of routes: http://localhost:3030/api/list

### hsl-map-server
  - frontend and express backend
  - hosting MQTT client and routing HSL data via socket to browser
  - Only one topic mqtt-subscription, rest of filter done at frontend
  - http://localhost:3000

## How to run

### Mongodb for Routedata

    $ mongod --smallfiles --dbpath hsl-mongodb/db/

### hsl-route-rest: Small REST API for Routedata

    $ cd hsl-route-rest
    $ npm install
    $ npm start


### hsl-map-server: Map Server && MQTT Subscriber

    $ cd hsl-map-server
    $ npm install
    $ npm start
    
  and goto: http://localhost:3000

### Docker images 
  
  Published docker image available for hsl-map-server: https://hub.docker.com/r/fairview/hsl-map-server/
  This does not contain link to mongodb and hsl-route-rest so "Valitse Linja"-control is not available.
  
### Docker Composed

  To run all three services as a linked docker images goto root of your clone and run:
    $ docker-compose build
    $ docker-compose up

### Screenshot

![screenshot](https://raw.githubusercontent.com/puuparta/tempwork/master/sample.png)
