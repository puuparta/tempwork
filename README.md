
## Prerequisites

- mongodb
- nodejs, 0.10.31 or newer

## Services

### Mongodb 
  - listening default port 27017
  - just hosting some GTFS converted static data like routes which is used now
  
### hsl-route-rest
  - tiny REST API. Only GET: http://localhost:3030 

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

### Composed docker image 

  will be coming...



### Screenshot

![screenshot](https://raw.githubusercontent.com/puuparta/tempwork/master/sample.png)
