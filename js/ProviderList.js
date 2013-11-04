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
                        18.209175722659893,
                        -67.14326197357231,
                        150
                    ), Country ,State ,City ,'7873627431');

    positions.savePosition(
        new Coords(
            18.20703611939031,
            -67.13836962432964,
            150
        ), Country ,State ,City ,'7873627432');


    positions.savePosition(
        new Coords(
            18.20587426367439,
            -67.13388497085691,
            150
        ), Country ,State ,City ,'7873627433');

    positions.savePosition(
        new Coords(
            18.199901795346566,
            -67.13459307403677,
            150
        ), Country ,State ,City ,'7873627434');


    positions.savePosition(
        new Coords(
            18.196823753920775,
            -67.13899189682134,
            150
        ), Country ,State ,City ,'7873627435');






}