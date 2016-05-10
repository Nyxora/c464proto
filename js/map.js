// Filename: map.js
// Author: Megan Bond
// Purpose: Interact with Google Maps API


// Variable set-ups.
var geocoder;
var map;
var address="United States";
var value;

// Map code from: http://www.w3schools.com/googleapi/tryit.asp?filename=tryhtml_map_marker_click

function initialize() {
    address = sessionStorage.addr;
    var locales = JSON.parse(sessionStorage.locales);
    var zoomLvl = parseInt(sessionStorage.zoomLvl);
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
        zoom: zoomLvl,
        center: latlng,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    google.maps.event.addDomListener(window,'resize', function() {
            var center = map.getCenter();
            map.setCenter(center);
    });
    
    if (geocoder) {
        geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
            map.setCenter(results[0].geometry.location);           
          } else {
                alert("No results found");
          }
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }
    
    var markers=[];
    var infowindows=[];

    for(i=0; i < locales.length; i++) {
        address = locales[i];
        
        console.log(locales[i]);
            
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+address+'&sensor=false', null, function(data) {
            var p = data.results[0].geometry.location;
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            marker = new google.maps.Marker({
                position: latlng,
                map: map
            });
            
            markers.push(marker);
            markers[i].index = i;
            
            infowindows[i] = new google.maps.InfoWindow({
                content: locales[i],
                maxWidth:300
            });
            
            google.maps.event.addListener(markers[i], 'click', function(address) {
                    infowindows[this.index].open(map, markers[this.index]);
            });
        });
    }
}
            
    








// End map code
