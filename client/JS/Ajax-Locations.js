

/*      END POINTS
GET     /location/locations
GET     /location/{id}
POST    /location/add
PUT     /location/{id}
DELETE  /location/{id}

*/

//GET ALL locations

$.ajax({
    type: 'GET',
    url: 'http://localhost:3333/location/locations',
    success: function (locationArray) {

        //get the element to store in

        //for each location
        $.each(locationArray, function (index, location) {


            //field access
            /*
                location.locationId;
                location.streetName;
                location.StreetNumber;
                location.suburb;
                location.postcode;
                location.state;
                location.latitude;
                location.longitude;
            */

            //format the data in some way

            //append to the element to store it in

        })
    },
    error: function (xhr) {

        //account for errors

    }
});


// GET ONE location
var locationId = 1;
$.ajax({
    type: 'GET',
    url: 'http://localhost:3333/location/' + locationId,
    success: function (locationArray) {

        //get the element to store in

        //will have one location
        $.each(locationArray, function (index, location) {


            //field access
            /*
                location.locationId;
                location.streetName;
                location.StreetNumber;
                location.suburb;
                location.postcode;
                location.state;
                location.latitude;
                location.longitude;
            */

            //format the data in some way

            //append to the element to store it in
          

        })
    },
    error: function (xhr) {

        //account for errors

    }
});


// DELETE ONE location
var locationId = 1;
$.ajax({
    type: 'DELETE',
    url: 'http://localhost:3333/location/' + locationId,
    success: function (locationArray) {

        //Log deletion
        

    },
    error: function (xhr) {

        //account for errors

    }
});

// REGISTER location
var locationId;
var streetName;
var StreetNumber;
var suburb;
var postcode;
var state;
var latitude;
var longitude;




$.ajax({
    type: 'POST',
    data: JSON.stringify({ 'locationId': locationId, 'streetName ': streetName, 'StreetNumber': StreetNumber, 'suburb': suburb, 'postcode': postcode, 'state': state, 'latitude': latitude, 'latitude': latitude, 'longitude': longitude }),
    contenttype: "application/json; charset=utf-8",
    datatype: "json",
    url: 'http://localhost:3333/location/' ,
    success: function (locationArray) {

        ///alert that location added

    },
    error: function (xhr) {

        //account for errors

    }
});

// UPDATE location
var locationId;
var streetName;
var StreetNumber;
var suburb;
var postcode;
var locationId;
var latitude;
var longitude;


$.ajax({
    type: 'PUT',
    data: JSON.stringify({ 'locationId': locationId, 'streetName ': streetName, 'StreetNumber': StreetNumber, 'suburb': suburb, 'postcode': postcode, 'state': state, 'latitude': latitude, 'latitude': latitude, 'longitude': longitude }),
    contenttype: "application/json; charset=utf-8",
    datatype: "json",
    url: 'http://localhost:3333/location/' ,
    success: function (locationArray) {

        ///alert that location updated

    },
    error: function (xhr) {

        //account for errors

    }
});


