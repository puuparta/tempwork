
var map;
var mapready=false;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 60.1681, lng: 24.9475}
    });
    // PASI: no need
    //var trafficLayer = new google.maps.TrafficLayer();
    //trafficLayer.setMap(map);
    RouteFilterControl.createRouteControl();
    MqttSocketFilter.createSocket();
    mapReady=true;
}