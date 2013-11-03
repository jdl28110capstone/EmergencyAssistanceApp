/**
 * Created by Jdl28110 on 10/16/13.
 */

//falta esto

 function getlistofservices(Category, latitude, longitude, positions){
    var position= positions.getPositions();
    position= Map.requestLocation(position);
    var State= position[1].state;
    var City= position[1].city;
    var Country= position[1].country;
    alert("Country: "+ Country + "  City: " + City + "  State: "+ State +
    "  Latitude: "+ position[1].position.latitude + "  Longitude: " + position[1].position.longitude +
    " Category: " + Category);


    //$.ajax({
    //    type: "POST",
    //    url : "http://localhost:3412/Register",
    //    contentType: "application/json",
    //    data: {Category: Category, Latitude: latitude, Longitude:longitude, State: State, City:City, Country:Country},
    //    success : function(list){
    //        for(var i = 0; i < 5; i++){

    //            positions.savePosition(
    //                new Coords(
    //                    list.latitude[i],
    //                    list.longitude[i],
    //                    positions.position.accuracy[i]
    //                ), Country ,State ,City ,list.mobile[i])
    //        }
    //        return positions;

    //    },
    //    error: function(){
    //        navigator.notification.alert("Your registration failed", function() {});
    //    }
   // });
    positions.savePosition(
                    new Coords(
                        43.41100878862102,
                        -80.41242268806303,
                        150
                    ), Country ,State ,City ,'7873627431');

    positions.savePosition(
        new Coords(
            43.41100863862102,
            -80.41242281806303,
            150
        ), Country ,State ,City ,'7873627432');


    positions.savePosition(
        new Coords(
            43.42100868862102,
            -80.41342288806303,
            150
        ), Country ,State ,City ,'7873627433');

    positions.savePosition(
        new Coords(
            43.41140868862102,
            -80.41245288806303,
            150
        ), Country ,State ,City ,'7873627434');


    positions.savePosition(
        new Coords(
            43.41103868862102,
            -80.43242288806303,
            150
        ), Country ,State ,City ,'7873627435');






}