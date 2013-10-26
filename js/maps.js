/**
 * Created by Jdl28110 on 10/12/13.
 */


    function Map() {

    }
















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
                  positions.updatePosition(0, positions.getPositions()[0].coords, results[0].formatted_address);
              }
         }
      );
    }