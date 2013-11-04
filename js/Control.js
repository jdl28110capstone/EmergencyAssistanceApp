/**
 * Created by Jdl28110 on 10/12/13.
 */


//function para inicial, necesaria para phonegap
function init() {
    $(document).on('pagebeforecreate orientationchange', updateIcons);

    $("#firefighters").click(function (){
        var category = 'Firefighter';
        searchfor(category);
    });

    $("#hospital").click(function (){
        searchfor('Hospital');
    });

    $("#police").click(function (){
        var category = 'Police';
        searchfor(category);
    });

    $("#ambulance").click(function (){
        var category = 'Ambulance';
        searchfor(category);
    });


    $("#call911").click(function (){
        if (navigator.userAgent.indexOf("Android") != -1) {
            document.location.href = 'tel:911';
        } else if (navigator.userAgent.indexOf("iPhone") != -1) {
            window.location = 'telprompt://911';
            navigator.notification.alert('Entra',
                function(){},
                'Info'
            );
        }

    });

    $("#other").click(function(){
        $.mobile.changePage("OtherServices.html");
    });



    $('#map-page').live('pageshow', function (event) {
        var positions= new Position();
        Map.displayMap(positions.getPositions());

    });

    $("#form").on("submit",handleLogin);
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

function updateIcons()
{
    if ($(window).width() > 480)
    {
        $('a[data-icon], button[data-icon]').each(
            function()
            {
                $(this).removeAttr('data-iconpos');
            }
        );
    }
    else
    {
        $('a[data-icon], button[data-icon]').each(
            function()
            {
                $(this).attr('data-iconpos', 'notext');
            }
        );
    }
}

//Recopila toda la informacion necesaria para Hospitales o llamadas
// Latitud y Longitud por medio de Geolocation
// Ciudad, Pais y estado utilizando Geocoder
// Se encuentra la funcion displayMap para crear y desplegar las posiciones, y rutas
// Se busca la lista de telefones y latitudes y longitudes ( en caso de Hospitales)
function searchfor(Category){


    var geolocationOptions = {
        timeout: 15 * 1000, // 15 seconds
        maximumAge: 10 * 1000, // 10 seconds
        enableHighAccuracy: true
    };
    var positions = new Position();

navigator.geolocation.getCurrentPosition(
function (location) {
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;

    positions.savePosition(
        new Coords(
            location.coords.latitude,
            location.coords.longitude,
            location.coords.accuracy
        ), "Country", "State", "City", window.localStorage["username"]
    );
    getlistofservices(Category, latitude, longitude, positions);
},

function locationFail() {
    navigator.notification.alert('Oops, could not find you, is your GPS enable?');
}, geolocationOptions);




if ( Category == 'Hospital'){
    $.mobile.loading('show');
    $.mobile.changePage("Map.html");
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

//  Para verificar Login, se concecta a servidor para verifar que los datos son correctos
function handleLogin(){
    var form = $("#form");


    //disable the button so we can't resubmit while we wait
    $("#submitButton",this).attr("disabled","disabled");

    // valores que inserto el user
    var datosUser = $("#username", form).val();
    var datosPassword = $("#password", form).val();
   //console.log("click");

   // $.ajax({
   //     type: "POST",
   //     url : "http://localhost:3412/Coordinates",
   //     contentType: "application/json",
   //     data: { username:datosUser ,password:datosPassword},
   //     success : function(responseServer){
   //         if(responseServer.validacion == "ok"){

                /// si la validacion es correcta, muestra la pantalla "Main"
                // window.localStorage["username"] = datosUser;
                // window.localStorage["password"] = datosPassword;
    navigator.notification.alert(
        'Entro'
    );

    $.mobile.changePage('#Main.html',{allowSamePageTransition:true,reloadPage:false,changeHash:true,transition:"slide"});


   //         }

   //     },
   //     error: function(){
   //         navigator.notification.alert("Your login failed", function() {});
   //     }
   // });
    $("#submitButton").removeAttr("disabled");

    return false;
}



//realiza la llamada de servidor, llama siempre al número de teléfono primero en la lista
// Ya que Next la lista se actualiza
 function CallNumber(){
    var position = new Position();
     var numbers =  position.getPositions();
     var telephone = numbers[0].mobile;

    if (navigator.userAgent.indexOf("Android") != -1) {
        alert("Entro a Call y voy a llamar a: " + telephone);
        document.location.href = 'tel:' + telephone;
    } else if (navigator.userAgent.indexOf("iPhone") != -1) {
        window.location = 'telprompt://' + telephone;
    }
}

//funcion para realizar la llamada al otro servidor en la lista, actualiza la lista borrando el objeto tipo mobil
// primero en la lista, cosa de que cuando se llame CallNumber, se utilice el proximo numero.
function Next(){
    var numbers = new Position();
    numbers.deletePosition(0);
    alert("Entro a Next")
    CallNumber();
}


