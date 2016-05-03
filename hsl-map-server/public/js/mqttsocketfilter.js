

$(function() {
    //MqttSocketFilter.createSocket();
    //socket moved to be started from initMap so we can be sure that google map api is loaded and ready to use
});

var MqttSocketFilter = {
 
    selectedRoutes : undefined,
    socket: undefined,
    oldTopic: null,
    
    createSocket: function() {
        
        MqttSocketFilter.socket = io({'forceNew':true });
        MqttSocketFilter.socket.on('routedata', function(data){
            
            var found=false;
            if(typeof MqttSocketFilter.selectedRoutes=='undefined') {
                found=true;  
            }
            else {
                for(var i in MqttSocketFilter.selectedRoutes) {
                    if(MqttSocketFilter.selectedRoutes[i].id==data.topic.split('/')[5]) {
                        found=true;
                        break;
                    }
                }; 
            }
            
            if(found){
                VehicleMarker.updateMarker(data);  
            }
        });
        
        MqttSocketFilter.socket.on("connect", function () {  
            console.log("Connected!");
        }); 
    },

    subscribe: function(new_topic) {
        VehicleMarker.cleanUpOldMarkers();
        MqttSocketFilter.socket.emit('subscribe',{old_topic: oldTopic, new_topic: new_topic});
        old_topic=new_topic;
    }   
}


/* BROWSER MQTT VERSION
var client = mqtt.connect('mqtt://213.138.147.225:1883');

client.on('connect', function () {
    client.subscribe('/hfp/journey/+/+/+/+/+/+/+/60;24/+/#');
});

client.on('message', function (topic, message) {
    // message is Buffer 
    var msg_utf8 = message.toString('utf8');
    var data = JSON.parse(msg_utf8);
    refreshMarker2(data.VP);
}); 
*/
