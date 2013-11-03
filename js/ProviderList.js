/**
 * Created by Jdl28110 on 10/16/13.
 */

//falta esto

 function getlistofservices(Category, latitude, longitude, positions){
    var position= positions.getPositions();
    position= Map.requestLocation(position);
    var State= position[0].state;
    var City= position[0].city;

    var Country= position[0].country;
    navigator.notification.alert("Country: "+ Country + "  City: " + City + "  State:"+ State +
    "  Latitude"+ position[1].position.latitude + "  Longitude" + position[1].position.longitude);


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
}