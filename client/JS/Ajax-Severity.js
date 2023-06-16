

/*      END POINTS



GET     /severity/{value}
GET     /severity/severities

*/


//GET ALL Severity

$.ajax({
    type: 'GET',
    url: 'http://localhost:3333/severity/severities',
    success: function (severityArray) {

        //get the element to store in

        //for each severity
        $.each(severityArray, function (index, severity) {


            //field access
            /*
                severity.severity
            */

            //format the data in some way

            //append to the element to store it in

        })
    },
    error: function (xhr) {

        //account for errors

    }
});


// GET ONE severity
var severityID = 1;
$.ajax({
    type: 'GET',
    url: 'http://localhost:3333/severity/' + severityID,
    success: function (severityArray) {

        //get the element to store in

        //will have one severity
        $.each(severityArray, function (index, severity) {


            //field access
            /*
                severity.severity

            */

            //format the data in some way

            //append to the element to store it in
          

        })
    },
    error: function (xhr) {

        //account for errors

    }
});