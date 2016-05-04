

//http://nelrohd.github.io/bootstrap-dropdown-checkbox/
    

$(function() {
  
    RouteFilterControl.getRouteList();
    
    $('.dropdown-checkbox').change(function() {
        VehicleMarker.deleteAllMarkers();
        MqttSocketFilter.selectedRoutes = $(".dropdown-checkbox-example").dropdownCheckbox("checked");
        
    });
});

var RouteFilterControl = {

    routeDictionary : {},
    
    createRouteControl: function() {
        var controlDiv =$("#control-div");
        controlDiv.index = 1;
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(controlDiv[0]);
    },

    populateRoutesToList: function(data) {

        var dataset = [];

        for(var k in data) {
            RouteFilterControl.routeDictionary[data[k].route_id] = data[k];
            dataset.push({
                id: data[k].route_id, label: data[k].route_short_name+' '+data[k].route_long_name, isChecked: true 
            });
        }
        
        $('.dropdown-checkbox-example').dropdownCheckbox({
            data: dataset,
            autosearch: true,
            hideHeader: false,
            title: 'Valitse linja',
            showNbSelected: true,
            templateButton: '<a class="dropdown-checkbox-toggle" data-toggle="dropdown" href="#">Valitse linja <span class="caret"></span></a>'
        }); 
    },

    getRouteList: function() {

        $.ajax( {
            url : './api/list', //'http://localhost:3030/api/list';
            type: "GET",
            dataType : "json",
            beforeSend : function(xhr) {
            
            },
            success : function (data, status, xhr) {
                RouteFilterControl.populateRoutesToList(data);
            },
            error: function( xhr, status ) {
                console.log('error in getRouteList: ' + status);
            },
            complete: function( xhr, status ) {
                console.log(status);
            }
        });
    }    
}
