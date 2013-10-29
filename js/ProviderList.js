/**
 * Created by Jdl28110 on 10/16/13.
 */

//falta esto

 function getlistofservices(Category, latitude, longitude){
    var positions = new Position();
    var Area= positions[0].area;
    var State= positions[0].state;
    var Country= positions[0].Country;

    $.ajax({
        type: "POST",
        url : "http://localhost:3412/Register",
        contentType: "application/json",
        data: {Category: Category, Latitude: latitude, Longitude:longitude, Area: Area, State:State, Country:Country },
        success : function(list){
            for(var i = 0; i < 5; i++){

                positions.savePosition(
                    new Coords(
                        list.latitude[i],
                        list.longitude[i],
                        null
                    ), Country ,Area, State,list.mobile[i])
            }
            return positions;

        },
        error: function(){
            navigator.notification.alert("Your registration failed", function() {});
        }
    });

    return false
}