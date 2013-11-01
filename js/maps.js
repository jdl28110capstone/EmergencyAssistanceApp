/**
 * Created by Jdl28110 on 10/12/13.
 */


    function Map() {

    }


/**
 * Display the map showing the user position or the latter and the car position
 */
Map.displayMap = function(position)
{
    var userLatLng = null;
    var HospitalLatLng = [];

    for(var i = 0; i < 5; i++){
        if( i==4){
            userLatLng = new google.maps.LatLng(position.coords.latitude[i], userPosition.coords.longitude[i]);
        }
        else{
            HospitalLatLng.unshift(new google.maps.LatLng(carPosition.position.latitude[i], carPosition.position.longitude[i]));
        }
    }


    var options = {
        zoom: 20,
        disableDefaultUI: true,
        streetViewControl: true,
        center: userLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
    var marker = new google.maps.Marker({
        position: userLatLng,
        map: map,
        Icon: 'images/user-marker.png',
        title: 'Your position'
    });

    var circle = new google.maps.Circle({
        center: userLatLng,
        radius: position.coords.accuracy[4],
        map: map,
        fillColor: '#70E7FF',
        fillOpacity: 0.2,
        strokeColor: '#0000FF',
        strokeOpacity: 1.0
    });

    map.fitBounds(circle.getBounds());

    for ( var e= 0; e <4; e++){
        marker = new google.maps.Marker({
            position: HospitalLatLng[e],
            map: map,
            icon: 'images/Hospital-marker.png',  //buscar imagen parecida a Hospital o algo similar
            title: 'Hospital position'
        });
        circle = new google.maps.Circle({
            center: HospitalLatLng[e],
            radius: position.position.accuracy[e],
            map: map,
            fillColor: '#70E7FF',
            fillOpacity: 0.2,
            strokeColor: '#0000FF',
            strokeOpacity: 1.0
        });
    }

        // Display route to the car
        options = {
            suppressMarkers: true,
            map: map,
            preserveViewport: true
        }
        this.setRoute(new google.maps.DirectionsRenderer(options), userLatLng, HospitalLatLng);


    $.mobile.loading('hide');
}






    Map.setRoute = function(directionsDisplay, userLatLng, HospitalLatLng)
    {
        var directionsService = new google.maps.DirectionsService();

        for ( var i=0; i <4; i++){
            var request = {
                origin: userLatLng,
                destination: HospitalLatLng[i],
                travelMode: google.maps.DirectionsTravelMode.WALKING,
             unitSystem: google.maps.UnitSystem.METRIC
            };

         directionsService.route(
                request,
                function(response, status)
                 {
                     if (status == google.maps.DirectionsStatus.OK)
                        directionsDisplay.setDirections(response);

                      else
                      {
                         navigator.notification.alert(
                             'Unable to retrieve a route to your car. However, you can still find it by your own.',
                             function(){},
                             'Warning'
                          );
                      }
                 }
         );
        }
    }


    //necesita arreglarse algoooooo lo de administrative_area_level_1 debería ser el equivalente para PR

    /**
    * Request the address of the retrieved location
    */
    Map.requestLocation = function(position)
    {
      new google.maps.Geocoder().geocode(
         {
             'location': new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
         },
         function(results, status)
         {
              if (status == google.maps.GeocoderStatus.OK)
              {
                  var positions = new Position();
                  var result = results[0];

                  var city = "";
                  var state = "";
                  var country = "";
                  for(var i=0, len=result.address_components.length; i<len; i++) {
                      var ac = result.address_components[i];
                      if(ac.types.indexOf("locality") >= 0) city = ac.long_name;
                      if(ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
                      if(ac.types.indexOf("country") >= 0) country = ac.long_name;
                  }
                  positions.updatePosition(0, positions.getPositions()[0].coords, country, state, city, null);
              }
         }
      );
    }