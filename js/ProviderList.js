/**
 * Created by Jdl28110 on 10/16/13.
 */

//falta esto

 function getlistofservices(Category, latitude, longitude, positions){
    var position= positions.getPositions()[0];
    Map.requestLocation(position);
    var State= position.state;
    var City= position.city;
    var Country= position.Country;
    //navigator.notification.alert("Hello to you out there in "+City+", "+State+""+Country, function() {});



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