

var VehicleMarker = {
    
    vehicles : {},
    
    getIcon: function getIcon(topic) {
        // 3: bus, rail, subway, tram, ferry
        var iconPath;
        var type = topic.split('/')[3];
        
        if(type == 'subway') {
            iconPath='/img/underground.png';
        }
        else if(type == 'rail') {
            iconPath='/img/train.png';
        }
        else if(type == 'tram') {
            iconPath='/img/tramway.png';
        }
        else {
            iconPath='/img/bus.png'; 
        }
        return iconPath;
    },
    
    deleteAllMarkers: function() {
        
        for(var k in VehicleMarker.vehicles) {
            if( typeof(VehicleMarker.vehicles[k]).marker != "undefined"){
                VehicleMarker.vehicles[k].marker.setMap(null);
                VehicleMarker.vehicles[k].marker = [];
            }
            delete VehicleMarker.vehicles[k];
        }
    },

    updateMarker: function(data) {
        
        var message = data.payload;
        if( typeof(VehicleMarker.vehicles[message.veh]) == "undefined"){
            VehicleMarker.vehicles[message.veh] = message;
            var marker = new google.maps.Marker({
                position: {lat: message.lat, lng: message.long},
                map: map,
                title: message.veh,
                icon: VehicleMarker.getIcon(data.topic)
            });
            VehicleMarker.vehicles[message.veh].marker=marker;
            
            VehicleMarker.vehicles[message.veh].infoWindow = new google.maps.InfoWindow({
                content: '<div class="info-content">'+
                            '<div><b>Tunnus: '+message.veh+'</b></div>' +
                            '<div>Linja nro: '+message.desi+'</div>' +
                            '<div>Nopeus: '+ (message.spd || '0') +' km/h</div>' +
                            '<div>Suunta: '+message.hdg+'</div>'+
                         '</div>',
                maxWidth: 200
            });
            
            VehicleMarker.vehicles[message.veh].marker.addListener('click', function() {
                VehicleMarker.vehicles[message.veh].infoWindow.open(map, marker);
            });
        } 
        else if(typeof VehicleMarker.vehicles[message.veh].infoWindow != 'undefined') {
            VehicleMarker.vehicles[message.veh].infoWindow.setContent('<div class="info-content">'+
                            '<div><b>Tunnus: '+message.veh+'</b></div>' +
                            '<div>Linja nro: '+message.desi+'</div>' +
                            '<div>Nopeus: ' + (message.spd || '0') + ' km/h</div>' +
                            '<div>Suunta: '+message.hdg+'</div>'+
                         '</div>');
            VehicleMarker.vehicles[message.veh].marker.setPosition({lat: message.lat, lng: message.long});
        }
    }
}