// mqtt sub -v -h 213.138.147.225 -p 1883 -t /hfp/journey/+/+/+/+/+/+/+/60;24/19/#
// origin: http://dev.hsl.fi/tmp/mqtt/map/#&zoom=12&lat=60.1813&lon=24.9887&topic=/hfp/journey/+/+/+/+/+/+/+/60;24/19/#
// browserify mqtt.js -s mqtt > browserMqtt.js 
// in sake of demonstration just keep message queue on serverside and push via websocket to frontend
// https://digipalvelutehdas.hackpad.com/HSL-MQTT-API-draft#HSL-MQTT-API-draft

// Created browser mqtt:
// https://github.com/mqttjs/MQTT.js
/*
    npm install -g webpack // install webpack
    cd node_modules/mqtt
    npm install . // install dev dependencies
    webpack mqtt.js ./browserMqtt.js --output-library mqtt
*/
// https://github.com/brugnara/gtfs-to-mongo

var mqtt = require('mqtt');
var client;               
var socketbuffer = [];
var counter=0; 
var websocketSubscribers = new Array();
var socket_ids = [];

exports.msqttClient = (topic, callback) => {
    client = mqtt.connect('mqtt://213.138.147.225:1883');
    client.on('connect', function () {
        client.subscribe(topic); 
        console.log('Connected to mqtt service.');
    });
    
    client.on('message', function (topic, message) {
        var msg_utf8 = message.toString('utf8');
        var data = JSON.parse(msg_utf8);
        callback(topic, data.VP);
    });                 
}

/* PH: NOT USED NOW. */
exports.subscribe = (old_topic, new_topic) => {
    client.unsubscribe(old_topic);
    client.subscribe(new_topic);   
};
