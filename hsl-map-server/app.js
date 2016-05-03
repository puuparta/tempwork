/**
 * "Kotitehtävä"
 * Simple HSL Map Server
 * 
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');

var hsl_mqtt = require('./lib/hsl_mqtt');
var routes = require('./routes/index');
var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup
app.engine('swig', swig.renderFile)
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'swig');

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('HSL Map server listening on port ' + server.address().port);
});

var io = require('socket.io').listen(server);
io.on('connection', function(socket) {
    console.log('Socket \'%s\' connected', socket.id);
    
    // client subscribes to new topic
    // PH: NOT USED NOW. ROUTES ARE FILTERED ON CLIENT SIDE.
    /*
    socket.on('subscribe', function (data) {
        
        var new_topic = '/hfp/journey/+/+/'+ data.new_topic +'/+/+/+/+/60;24/+/#';
        console.log('client %s subscribe to topic: %s', socket.id, new_topic)
        ;
        // subscribe mqtt client to given topic
        hsl_mqtt.subscribe('/hfp/journey/+/+/+/+/+/+/+/60;24/+/#', new_topic);
        socket.leave(data.old_topic);
        socket.join(data.new_topic); //here we use just line to match emit
    });
    */
    
    socket.on('disconnect', function(){
        console.log('Socket \'%s\' disconnected', socket.id);
    });
});

// Reroute mqtt messages to websocket
hsl_mqtt.msqttClient('/hfp/journey/+/+/+/+/+/+/+/60;24/+/#', function(topic, mqtt_data) {
    io.emit('routedata', {topic: topic, payload: mqtt_data});
});

