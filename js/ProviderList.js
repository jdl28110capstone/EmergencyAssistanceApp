/**
 * Created by Jdl28110 on 10/16/13.
 */


 function getlistofservides(Category, latitude, longitude){
    var providerlist= new Position();

    $post(Register, {Category: Category, Latitude: Latitude, Longitude:longitude, Area: Area},
        (function(list){

            return providerlist;
            }

         ), "json" );
    return false
}