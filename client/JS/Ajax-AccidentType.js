

/*      END POINTS




GET     /accidenttype/accidenttypes
GET     /accidenttype/{id}
POST    /accidenttype/add
PUT     /accidenttype/{id}
DELETE  /accidenttype/{id}


*/

//GET ALL ACCIDENTS

$.ajax({
    type: 'GET',
    url: 'http://localhost:3333/accidenttype/accidenttypes',
    success: function (accidentTypeArray) {

        //get the element to store in

        //for each accidenttype
        $.each(accidentTypeArray, function (index, accidentType) {


            //field access
            /*
                accidentType.typeId;
                accidentType.accidentType;
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
var accidenttypeID = 1;
$.ajax({
    type: 'GET',
    url: 'http://localhost:3333/accidenttype/' + accidenttypeID,
    success: function (accidentTypeArray) {

        //get the element to store in

        //will have one accidenttype
        $.each(accidentTypeArray, function (index, accidentType) {


            //field access
            /*
                accidentType.typeId;
                accidentType.accidentType;
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
var accidenttypeID = 1;
$.ajax({
    type: 'DELETE',
    url: 'http://localhost:3333/accidenttype/' + accidentType,
    success: function (accidentTypeArray) {

        //Log deletion
        

    },
    error: function (xhr) {

        //account for errors

    }
});

// REGISTER ACCIDENT
var typeId;
var accidentType;


$.ajax({
    type: 'POST',
    data: JSON.stringify({ 'typeId': typeId, 'accidentType ': accidentType}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: 'http://localhost:3333/accidenttype/' ,
    success: function (accidentTypeArray) {

        ///alert that accidenttype added

    },
    error: function (xhr) {

        //account for errors

    }
});

// UPDATE ACCIDENT
var typeId;
var accidentType;
var accidenttypeTime;
var accidenttypeDate;
var accidenttypeDesc;
var locationId;
var accidenttypeTypeId;
var witnessEmail;
var accidenttypeSeverity;

$.ajax({
    type: 'PUT',
    data: JSON.stringify({ 'typeId': typeId, 'accidentType ': accidentType}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: 'http://localhost:3333/accidenttype/' ,
    success: function (accidentTypeArray) {

        ///alert that accidenttype updated

    },
    error: function (xhr) {

        //account for errors

    }
});


