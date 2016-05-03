<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <link rel="stylesheet" href="/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="/css/bootstrap-dropdown-checkbox.css">
  <link rel="stylesheet" href="/css/style.css">
  <script src="/js/jquery_min_1.12.3.js"></script>
  <script src="/js/bootstrap.min.js"></script>
  <script src="/js/bootstrap-dropdown-checkbox.min.js"></script>
  <script src="/js/googlemap.js"></script>
  <script src="/js/vehiclemarker.js"></script>
  <script src="/js/routefiltercontrol.js"></script>
  <script src="/js/mqttsocketfilter.js"></script>
    <!-- NOT IN USE. Tested and works better: <script src="/js/browserMqtt.js"></script> -->
</head>
<body>
  <script src="/socket.io/socket.io.js"></script>
  <div id="map"></div> 
  <div id="control-div" class="control-div">
      <ul class="nav navbar-nav">
        <li class="dropdown-checkbox-example dropdown-checkbox dropdown"></li>
      </ul>
  </div>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVio_i4igERSj19rhVlIl1vR7EmjtQ52E&callback=initMap"></script>
</body>
</html>
