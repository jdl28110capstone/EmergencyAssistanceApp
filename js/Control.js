/**
 * Created by Jdl28110 on 10/12/13.
 */


//function para inicial, necesaria para phonegap
function init() {
    document.addEventListener("deviceready", deviceReady, true);
    delete init;
}

//funcion para verificar si hay conexion de internet
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


//Recopila toda la informacion necesaria para Hospitales o llamadas
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

if ( Category == 'Hospital'){
    $.mobile.changePage("#Map.html");
}

else {
    $.mobile.changePage("Call.html");
}

}

//Verifica si el usuario ya hecho login
function checkPre() {
    var form = $("#loginForm");
    if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined) {
        $("#username", form).val(window.localStorage["username"]);
        $("#password", form).val(window.localStorage["password"]);
        handleLogin();
    }
}

//  Para verificar Login
function handleLogin(){
    var form = $("#form");

    //disable the button so we can't resubmit while we wait
    $("#submitButton",this).attr("disabled","disabled");

    // valores que inserto el user
    var datosUser = $("#username", form).val();
    var datosPassword = $("#password", form).val();
    console.log("click");

    $.ajax({
        type: "POST",
        url : "http://localhost:3412/Coordinates",
        contentType: "application/json",
        data: { username:datosUser ,password:datosPassword},
        success : function(responseServer){
            if(responseServer.validacion == "ok"){

                /// si la validacion es correcta, muestra la pantalla "Main"
                $.mobile.changePage("#Main.html");

            }

        },
        error: function(){
            navigator.notification.alert("Your login failed", function() {});
        }
    });
    $("#submitButton").removeAttr("disabled");

    return false;
}



function deviceReady() {

    $("#form").on("submit",handleLogin);

}

// si el usuario se encuentra en la pagina de Map se activa este evento
$('#map-page').live(
    'pageshow', function()
    {
        var position = new Position();
        Map.displayMap(position.getPositions()[0], position.getPositions());
    });

//realiza la llamada de servidor
 function CallNumber(){
    var numbers = new Position();
     var telephone =  numbers.mobile[0];
    if (navigator.userAgent.indexOf("Android") != -1) {
        document.location.href = 'tel:' + telephone;
    } else if (navigator.userAgent.indexOf("iPhone") != -1) {
        window.location = 'telprompt://' + telephone;
    }
}

//funcion para realizar la llamada al otro servidor en la lista
function Next(){
    var numbers = new Position();
}

