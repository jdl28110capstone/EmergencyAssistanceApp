/**
 * Created by Jdl28110 on 10/16/13.
 */

//falta esto

 function getlistofservices(Category, latitude, longitude){
    var positions = new Position();
    var State= positions[0].state;
    var City= positions[0].city;
    var Country= positions[0].Country;

    $.ajax({
        type: "POST",
        url : "http://localhost:3412/Register",
        contentType: "application/json",
        data: {Category: Category, Latitude: latitude, Longitude:longitude, State: State, City:City, Country:Country},
        success : function(list){
            for(var i = 0; i < 5; i++){

                positions.savePosition(
                    new Coords(
                        list.latitude[i],
                        list.longitude[i],
                        null
                    ), Country ,State ,City ,list.mobile[i])
            }
            return positions;

        },
        error: function(){
            navigator.notification.alert("Your registration failed", function() {});
        }
    });

    return false
}