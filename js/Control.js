/**
 * Created by Jdl28110 on 10/12/13.
 */

function init() {
    document.addEventListener("deviceready", deviceReady, true);
    delete init;
}

function checkRequirements()
{
    if (navigator.network.connection.type == Connection.NONE)
    {
        navigator.notification.alert(
            'To use this app you must enable your internet connection',
            function(){},
            'Warning'
        );
        return false;
    }

    return true;
}



function searchfor(Category){


    var geolocationOptions = {
        timeout: 15 * 1000, // 15 seconds
        maximumAge: 10 * 1000, // 10 seconds
        enableHighAccuracy: true
    };
    var position = new Position();

navigator.geolocation.getCurrentPosition(locationSuccess, locationFail, geolocationOptions);
function locationSuccess(location) {
    latitude = locationn.coords.latitude;
    longitude = location.coords.longitude;

    position.savePosition(
        new Coords(
            location.coords.latitude,
            location.coords.longitude,
            location.coords.accuracy
        )
    );
}

function locationFail() {
    navigator.notification.alert('Oops, could not find you, is your GPS enable?');
}

var providerlist = providerlist.getlistofservides(Category, latitude, longitude);

if ( Category == 'Hospital'){


}

else {
       callservices (providerlist);
}

}


function checkPre() {
    var form = $("#loginForm");
    if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined) {
        $("#username", form).val(window.localStorage["username"]);
        $("#password", form).val(window.localStorage["password"]);
        handleLogin();
    }
}

function handleLogin(){
    var form = $("#form");
    //disable the button so we can't resubmit while we wait
    $("#submitButton",this).attr("disabled","disabled");

    // valores que inserto el user
    var datosUser = $("#username", form).val();
    var datosPassword = $("#password", form).val();
    console.log("click");

    Validation = "url del servidor"

    $.post( Validation, { username:datosUser ,password:datosPassword},
        (function(responseServer) {

            if(responseServer.validacion == "ok"){

                /// si la validacion es correcta, muestra la pantalla "Main"
                $.mobile.changePage("#Main.html")

            }else{

                navigator.notification.alert("Your login failed", function() {});
            }
            $("#submitButton").removeAttr("disabled");

        }), "json");
    return false;
}



function deviceReady() {

    $("#form").on("submit",handleLogin);

}

