

/*      END POINTS

GET     /witness/witnesses
GET     /witness/{id}
POST    /witness/add
PUT     /witness/{id}
DELETE  /witness/{id}

*/

//GET ALL WITNESSES

$.ajax({
    type: 'GET',
    url: 'http://localhost:3333/witness/witnesses',
    success: function (witnessArray) {

        //get the element to store in

        //for each accident
        $.each(witnessArray, function (index, witness) {


            //field access
            /*
                witness.witnessEmail;
                witness.firstName;
                witness.lastName;
                witness.mobile;
            */

            //format the data in some way

            //append to the element to store it in

        })
    },
    error: function (xhr) {

        //account for errors

    }
});


// GET ONE WITNESS
var witnessID = 1;
$.ajax({
    type: 'GET',
    url: 'http://localhost:3333/witness/' + witnessID,
    success: function (accidentArray) {

        //get the element to store in

        //will have one accident
        $.each(witnessArray, function (index, witness) {


            //field access
            /*
                witness.witnessEmail;
                witness.firstName;
                witness.lastName;
                witness.mobile;
            */

            //format the data in some way

            //append to the element to store it in
          

        })
    },
    error: function (xhr) {

        //account for errors

    }
});


// DELETE ONE WITNESS
var witnessID = 1;
$.ajax({
    type: 'DELETE',
    url: 'http://localhost:3333/witness/' + witnessID,
    success: function (witnessArray) {

        //Log deletion
        

    },
    error: function (xhr) {

        //account for errors

    }
});

// REGISTER WITNESS
var witnessEmail;
var firstName;
var lastName;
var mobile;

$.ajax({
    type: 'POST',
    data: JSON.stringify({ 'witnessEmail': witnessEmail, 'firstName ': firstName, 'lastName': lastName, 'mobile': mobile}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: 'http://localhost:3333/witness/' ,
    success: function (witnessArray) {

        ///alert that accident added

    },
    error: function (xhr) {

        //account for errors

    }
});

// UPDATE WITNESS
var witnessEmail;
var firstName;
var lastName;
var mobile;

$.ajax({
    type: 'PUT',
    data: JSON.stringify({ 'witnessEmail': witnessEmail, 'firstName ': firstName, 'lastName': lastName, 'mobile': mobile}),
     contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: 'http://localhost:3333/witness/' ,
    success: function (witnessArray) {

        ///alert that accident updated

    },
    error: function (xhr) {

        //account for errors

    }
});


