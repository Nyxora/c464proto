// Prototype Map API code

// Modified code from: https://gist.github.com/bootsified/7d3bbfe05e0b73d5c5d3

$(window).load(function() {
        var map;
        var bounds
        var locationCount;
        var infoWindow = null;
        // The array of locations to mark on the map.
        // Add as many locations as necessary.
        var locations = JSON.parse(sessionStorage.locales);
        // Init the map
        function init() {
            // Customize look of the map.
            // https://www.mapbuildr.com/
            var mapOptions = {
                zoom: 14,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                },
                disableDoubleClickZoom: true,
                mapTypeControl: false,
                panControl: false,
                scaleControl: true,
                scrollwheel: true,
                streetViewControl: false,
                draggable : true,
                overviewMapControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            }
            var mapElement = document.getElementById('map_canvas');
            map = new google.maps.Map(mapElement, mapOptions);
            // OPTIONAL: Set listener to tell when map is idle
            // Can be useful during dev
            google.maps.event.addListener(map, "idle", function(){
                // console.log("map is idle");
            });
            var geocoder = new google.maps.Geocoder();
            bounds = new google.maps.LatLngBounds();
            locationCount = 0;
            // Init InfoWindow and leave it
            // for use when user clicks marker
            infoWindow = new google.maps.InfoWindow( { content: "Loading content..." } );
            // Loop through locations and set markers
            for (i = 0; i < locations.length; i++) {
                var address = locations[i];
                //Get latitude and longitude from address
                geocoder.geocode( {'address': address}, onGeocodeComplete(i));
            }
            // Re-center map on window resize
            google.maps.event.addDomListener(window, 'resize', function() {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });
        } // END init()
        // Triggered as the geocode callback
        function onGeocodeComplete(i) {
            // Callback function for geocode on response from Google.
            // We wrap it in 'onGeocodeComplete' so we can send the
            // location index through to the marker to establish
            // content.
            var geocodeCallBack = function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    // The HTML content for the InfoWindow.
                    // Includes a form to allow the user to
                    // get directions.
                    var windowContent = locations[i];
                    // Create the marker for the location
                    // We use 'html' key to attach the
                    // InfoWindow content to the marker.
                    var marker = new google.maps.Marker({
                        position: results[0].geometry.location,
                        map: map,
                        html: windowContent,
                        title: windowContent
                    });
                    // Set event to display the InfoWindow anchored
                    // to the marker when the marker is clicked.
                    google.maps.event.addListener( marker, 'click', function() {
                        // Updates the InfoWindow content with
                        // the HTML held in the marker ('this').
                        infoWindow.setContent(this.html);
                        infoWindow.open(map, this);
                    });
                    
                    // Add this marker to the map bounds
                    extendBounds(results[0].geometry.location);
                } else {
                    window.log('Location geocoding has failed: ' + google.maps.GeocoderStatus);
                }
            } // END geocodeCallBack()
            return geocodeCallBack;
        } // END onGeocodeComplete()
        // Establishes the bounds for all the markers
        // then centers and zooms the map to show all.
        function extendBounds(latlng) {
            ++locationCount;
            bounds.extend(latlng);
            if (locationCount == locations.length) {
                map.fitBounds(bounds);
            }
        } // END extendBounds()
        init();
        
    }); // END $(window).load