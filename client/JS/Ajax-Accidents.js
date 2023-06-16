

/*      END POINTS


GET     /accident/accidents
GET     /accident/{id}
POST    /accident/add
PUT     /accident/{id}
DELETE  /accident/{id}


GET     /accidenttype/accidenttypes
GET     /accidenttype/{id}
POST    /accidenttype/add
PUT     /accidenttype/{id}
DELETE  /accidenttype/{id}


GET     /location/locations
GET     /location/{id}
POST    /location/add
PUT     /location/{id}
DELETE  /location/{id}


GET     /witness/witnesses
GET     /witness/{id}
POST    /witness/add
PUT     /witness/{id}
DELETE  /witness/{id}

GET     /severity/{value}

*/

//GET ALL ACCIDENTS

$.ajax({
    type: 'GET',
    url: 'http://localhost:3333/accident/accidents',
    success: function (accidentArray) {

        //get the element to store in

        //for each accident
        $.each(accidentArray, function (index, accident) {


            //field access
            /*
                accident.accidentId;
                accident.vehicleCount;
                accident.accidentTime;
                accident.accidentDate;
                accident.accidentDesc;
                accident.locationId;
                accident.accidentTypeId;
                accident.witnessEmail;
                accident.accidentSeverity;
            */

            //format the data in some way

            //append to the element to store it in

        })
    },
    error: function (xhr) {

        //account for errors

    }
});


// GET ONE ACCIDENT
var accidentID = 1;
$.ajax({
    type: 'GET',
    url: 'http://localhost:3333/accident/' + accidentID,
    success: function (accidentArray) {

        //get the element to store in

        //will have one accident
        $.each(accidentArray, function (index, accident) {


            //field access
            /*
                accident.accidentId;
                accident.vehicleCount;
                accident.accidentTime;
                accident.accidentDate;
                accident.accidentDesc;
                accident.locationId;
                accident.accidentTypeId;
                accident.witnessEmail;
                accident.accidentSeverity;
            */

            //format the data in some way

            //append to the element to store it in
          

        })
    },
    error: function (xhr) {

        //account for errors

    }
});


// DELETE ONE ACCIDENT
var accidentID = 1;
$.ajax({
    type: 'DELETE',
    url: 'http://localhost:3333/accident/' + accidentID,
    success: function (accidentArray) {

        //Log deletion
        

    },
    error: function (xhr) {

        //account for errors

    }
});

// REGISTER ACCIDENT
var accidentId;
var vehicleCount;
var accidentTime;
var accidentDate;
var accidentDesc;
var locationId;
var accidentTypeId;
var witnessEmail;
var accidentSeverity;

$.ajax({
    type: 'POST',
    data: JSON.stringify({ 'accidentId': accidentId, 'vehicleCount ': vehicleCount, 'accidentTime': accidentTime, 'accidentDate': accidentDate, 'accidentDesc': accidentDesc, 'locationId': locationId, 'accidentTypeId': accidentTypeId, 'accidentTypeId': accidentTypeId, 'witnessEmail': witnessEmail , 'accidentSeverity': accidentSeverity}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: 'http://localhost:3333/accident/' ,
    success: function (accidentArray) {

        ///alert that accident added

    },
    error: function (xhr) {

        //account for errors

    }
});

// UPDATE ACCIDENT
var accidentId;
var vehicleCount;
var accidentTime;
var accidentDate;
var accidentDesc;
var locationId;
var accidentTypeId;
var witnessEmail;
var accidentSeverity;

$.ajax({
    type: 'PUT',
    data: JSON.stringify({ 'accidentId': accidentId, 'vehicleCount ': vehicleCount, 'accidentTime': accidentTime, 'accidentDate': accidentDate, 'accidentDesc': accidentDesc, 'locationId': locationId, 'accidentTypeId': accidentTypeId, 'accidentTypeId': accidentTypeId, 'witnessEmail': witnessEmail , 'accidentSeverity': accidentSeverity}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: 'http://localhost:3333/accident/' ,
    success: function (accidentArray) {

        ///alert that accident updated

    },
    error: function (xhr) {

        //account for errors

    }
});


