$('document').ready(function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  // Determine if is the first time on this page
  if (!sessionStorage.getItem("beenHereBefore")) {
    sessionStorage.setItem('beenHereBefore', 'true');
    //console.log('have not been here!');
    sessionStorage.setItem('activePage', '1');
    //console.log('intial value set');
  }
  if(sessionStorage.getItem('activePage') == '1'){
    //console.log("Its equal to 1!");
    showHomePage();
  }
  if(sessionStorage.getItem('activePage') == '2'){
    //console.log("Its equal to 2!");
    showNewAccident();
  }
  if(sessionStorage.getItem('activePage') == '3'){
    //console.log("Its equal to 3!");
    showMap();
  }
  if(sessionStorage.getItem('activePage') == '4'){
    //console.log("Its equal to 4!");
    showAllAccidents();
  }
});

function showHomePage(){
  $('.new-accident').hide();
  $('.all-accidents').hide();
  $('.view-map').hide();
  $('.home-page').show();

  sessionStorage.setItem("activePage", '1');
  //console.log("sessionStorage: " + sessionStorage.getItem('activePage'))

  document.getElementById('home-page-nav-link').classList.add('active');
  document.getElementById('new-accident-nav-link').classList.remove('active');
  document.getElementById('view-map-nav-link').classList.remove('active');
  document.getElementById('all-accidents-nav-link').classList.remove('active');
}

function showNewAccident(){
  $('.all-accidents').hide();
  $('.home-page').hide();
  $('.view-map').hide();
  $('.new-accident').show();
  $('#inputOtherType').hide();

  sessionStorage.setItem("activePage", '2');
  //console.log("sessionStorage: " + sessionStorage.getItem('activePage'))

  document.getElementById('home-page-nav-link').classList.remove('active');
  document.getElementById('new-accident-nav-link').classList.add('active');
  document.getElementById('view-map-nav-link').classList.remove('active');
  document.getElementById('all-accidents-nav-link').classList.remove('active');
}

function showMap(){
  $('.new-accident').hide();
  $('.home-page').hide();
  $('.all-accidents').hide();
  $('.view-map').show();

  sessionStorage.setItem("activePage", '3');
  //console.log("sessionStorage: " + sessionStorage.getItem('activePage'))

  document.getElementById('home-page-nav-link').classList.remove('active');
  document.getElementById('new-accident-nav-link').classList.remove('active');
  document.getElementById('view-map-nav-link').classList.add('active');
  document.getElementById('all-accidents-nav-link').classList.remove('active');
}

function showAllAccidents(){
  $('.new-accident').hide();
  $('.home-page').hide();
  $('.view-map').hide();
  $('.all-accidents').show();
  allAccidents();

  sessionStorage.setItem("activePage", '4');
  //console.log("sessionStorage: " + sessionStorage.getItem('activePage'))

  document.getElementById('home-page-nav-link').classList.remove('active');
  document.getElementById('new-accident-nav-link').classList.remove('active');
  document.getElementById('view-map-nav-link').classList.remove('active');
  document.getElementById('all-accidents-nav-link').classList.add('active');
}

function allAccidents() {
  var selectElement = document.querySelector('#state_dd');
  var stateOutput = selectElement.value;

  $('div#allAccidents').empty();

  var checkboxed = [];
  $(':checkbox:checked').each(function (i) {
    checkboxed[i] = $(this).val();
  });

  var locationIds = [];
  var locationList = [];
  var locationStates = [];
  
  var typeIds = [];
  var typeList = [];
  
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3333/location/locations',
    success: function (locationArray) {
      //for each location
      $.each(locationArray, function (index, location) {

        locationIds[index] = location.locationId;

        var locationData = "";
        locationData += location.streetNumber + " ";
        locationData += location.streetName + ", ";
        locationData += location.suburb + " ";
        locationData += location.postcode + ", ";
        locationData += location.state;

        locationList[index] = locationData;
        locationStates[index] = location.state;
      })

      $.ajax({
        type: 'GET',
        url: 'http://localhost:3333/accidenttype/accidenttypes',
        success: function (accidentTypeArray) {
          //for each accidenttype
          $.each(accidentTypeArray, function (index, accidentType) {
            typeIds[index] = accidentType.typeId;
            typeList[index] = accidentType.accidentType;
          })
    
          $.ajax({
            type: 'GET',
            url: 'http://localhost:3333/accident/accidents',
            success: function (accidentArray) {
              var accidentDiv = $('div#allAccidents');
        
              //         accident.accidentId;
              //         accident.vehicleCount;
              //         accident.accidentTime;
              //         accident.accidentDate;
              //         accident.accidentDesc;
              //         accident.locationId;
              //         accident.accidentTypeId;
              //         accident.witnessEmail;
              //         accident.accidentSeverity;
        
              $.each(accidentArray, function (index, accident) {
        
                var accidentInfo = '<p style="margin-left: 10px;">';
                accidentInfo += '<b>Accident Description:</b> ' + accident.accidentDesc + '<br>';
                accidentInfo += '<b>Accident Type:</b> ' + typeList[accident.accidentTypeId-1] + '<br>';
                accidentInfo += '<b>Vehicles Involved:</b> ' + accident.vehicleCount + '<br>';
                accidentInfo += '<b>Recorded at:</b> ' + accident.accidentTime + ' on ' + accident.accidentDate + '<br>';
                accidentInfo += '<b>Located at:</b> ' + locationList[accident.locationId-1] + '<br>';
                accidentInfo += '<b>Severity:</b> ' + accident.accidentSeverity + '<br>';
                accidentInfo += '</p><hr>';
        
                for (let i = 0; i < checkboxed.length; i++) {
                  if (checkboxed[i] == accident.accidentSeverity) {
                    if(stateOutput == "All" || stateOutput == locationStates[index]){
                      accidentDiv.append(accidentInfo);
                    }
                  }
                }
              })
            },
            error: function (event) {
              // var err = JSON.parse(event.responseText);
              console.log("failed at accidents list: " + event);
              // var notify = $('#display_acc_error');
              // notify.empty();
              // notify.append(err.details);
            }
          });
        },
        error: function (event) {
          // var err = JSON.parse(event.responseText);
          console.log("failed at accident types list: " + event);
          // var notify = $('#display_acc_error');
          // notify.empty();
          // notify.append(err.details);
        }
      });
    },
    error: function (event, xhr) {
      // var err = JSON.parse(event.responseText);
      console.log("failed at locations list: " + event);
      // var notify = $('#display_acc_error');
      // notify.empty();
      // notify.append(err.details);
    }
  });

}

function getLocation(isCoords){

  if(isCoords){
    const successCallback = (position) => {
      //console.log(position);
      $('#inputLatitude').val(position.coords.latitude);
      $('#inputLongitude').val(position.coords.longitude);
      
      document.getElementById('inputStreetNum').required = false;
      $('#streetNumLabel').html('Street No.');
      document.getElementById('inputStreetName').required = false;
      $('#streetNameLabel').html('Street Name');
      document.getElementById('inputSuburb').required = false;
      $('#suburbLabel').html('Suburb');
      document.getElementById('inputPostcode').required = false;
      $('#postcodeLabel').html('Postcode');
      document.getElementById('inputState').required = false;
      $('#stateLabel').html('State');
    };

    const errorCallback = (error) => {
      $('#coordsError').html('<h6 class="pt-3" style="color: darkred">Geolocation is not supported by this browser, please enter your address manually.</h6>');
      
      document.getElementById('inputLatitude').disabled = true;
      document.getElementById('inputLatitude').disabled = true;

      document.getElementById('inputStreetNum').required = true;
      document.getElementById('inputStreetName').required = true;
      document.getElementById('inputSuburb').required = true;
      document.getElementById('inputPostcode').required = true;
      document.getElementById('inputState').required = true;
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  } else {
    document.getElementById('inputLatitude').required = false;
    $('#latitudeLabel').html('Latitude');
    document.getElementById('inputLongitude').required = false;
    $('#longitudeLabel').html('Longitude');
  }
}

function isOther(){
  //alert($('#inputAccType').val());
  if($('#inputAccType').val() == "other"){
    $('#inputOtherType').show();
    document.getElementById('inputOtherType').required = true;
  } else {
    $('#inputOtherType').hide();
    document.getElementById('inputOtherType').required = false;
  }
}

$(document).ready(function(){
  $('#addAccident').on("click", function(event) {
      event.preventDefault();

      const api = "AIzaSyBIV-yfyLwbrQh7fGqgrkMFHGXGjgn6258";

      // set relevant location data to fill it in
      var reverseGeocodingUrl = "";
      console.log($('#inputLatitude').val());
      if($('#inputLatitude').val() != ""){
        reverseGeocodingUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + $('#inputLatitude').val() + "," + $('#inputLongitude').val() + "&key=" + api;

        $.ajax({
          type: 'GET',
          url: reverseGeocodingUrl,
          success: function(data) {
            //console.log("Street Number: " + data.results[0].address_components[0].long_name);
            //console.log("Street Name: " + data.results[0].address_components[1].short_name);
            //console.log("Suburb: " + data.results[0].address_components[2].long_name);
            //console.log("State: " + data.results[0].address_components[4].short_name);   
            //console.log("Country: " + data.results[0].address_components[5].long_name);
            //console.log("Postcode: " + data.results[0].address_components[6].long_name);
  
            $('#inputStreetNum').val(data.results[0].address_components[0].long_name);
            $('#inputStreetName').val(data.results[0].address_components[1].short_name);
            $('#inputSuburb').val(data.results[0].address_components[2].long_name);
            $('#inputState').val(data.results[0].address_components[4].short_name);
            $('#inputPostcode').val(data.results[0].address_components[6].long_name);
            console.log($('#inputStreetNum').val());
            console.log($('#inputStreetName').val());
            console.log($('#inputSuburb').val());
            console.log($('#inputState').val());
            console.log($('#inputPostcode').val());
  
            postLocationData();
        },
        error: function(error) {
            console.log(error);
            console.log(error.status);
        }
        })  
      } else {

        const address = $('#inputStreetNum').val() + " " + $('#inputStreetName').val() + ", " + $('#inputSuburb').val() + ", " + $('#inputState').val() + " " + $('#inputPostcode').val();

        console.log($('#inputStreetNum').val() + " " + $('#inputStreetName').val() + ", " + $('#inputSuburb').val() + ", " + $('#inputState').val() + " " + $('#inputPostcode').val());

        fetch(reverseGeocodingUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + api)
        .then((response) => {
          console.log(response);
          return response.json();
        }).then(jsonData => {
          //console.log(jsonData.results[0].geometry.location.lat);
          //console.log(jsonData.results[0].geometry.location.lng);
          $('#inputLatitude').val(jsonData.results[0].geometry.location.lat);
          $('#inputLongitude').val(jsonData.results[0].geometry.location.lng);

          postLocationData();
        }).catch(error => {
          console.log(error);
        })
      }

             
  });
});

function postLocationData(){
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3333/location/add',
    data: JSON.stringify({
        streetNumber: $('#inputStreetNum').val(),
        streetName: $('#inputStreetName').val(),
        suburb: $('#inputSuburb').val(),
        postcode: $('#inputPostcode').val(),
        state: $('#inputState').val(),
        latitude: $('#inputLatitude').val(),
        longitude: $('#inputLongitude').val()
    }),
    contentType: 'application/json',
    accept: 'application/json',
    success: function (data) {
        console.log('location was created: ' + data);

        postAccidentType();
    },
    error: function (event, xhr) {
      // var err = JSON.parse(event.responseText);
      // // var notify = $('#display_acc_error');
      // // notify.empty();
      // // notify.append(err.details);
      // alert(err.details);
      $('#new-accident-post-notification').empty();
      $('#new-accident-post-notification').append("Oh no! There's been an error with the <b>location information</b> in the form, please fix accordingly.");
      console.log("failed");
      alert(event.responseText);
    }
  })
}

function postAccidentType(){
  if($('#inputAccType').val() == "other"){
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3333/accidenttype/add',
      data: JSON.stringify({
          accidenType: $('#inputOtherType').val()
      }),
      contentType: 'application/json',
      accept: 'application/json',
      success: function (data) {
          console.log('accidentType was created: ' + data);
  
          getRelevantAccidentData();
      },
      error: function (event, xhr) {
        // var err = JSON.parse(event.responseText);
        // // var notify = $('#display_acc_error');
        // // notify.empty();
        // // notify.append(err.details);
        // alert(err.details);
        $('#new-accident-post-notification').empty();
        $('#new-accident-post-notification').append("Oh no! There's been an error with the <b>accident type</b> in the form, please fix accordingly.");
        console.log("failed at accidenttype");
        alert(event.responseText);
        console.log(xhr);
      }
    });
  } else {
    console.log("skipping postAccidentType...");
    getRelevantAccidentData();
  }
}

function getRelevantAccidentData(){

  var locationId = '';
  var accidentTypeId = '';

  //get location id and accident type id
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3333/location/locations',
    success: function (locationArray) {
        $.each(locationArray, function (index, location) {
          if(location.latitude == $('#inputLatitude').val() && location.longitude == $('#inputLongitude').val()){
            locationId = location.locationId;
            //console.log("finished locations");
            //console.log(locationId);
          }
        })
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3333/accidenttype/accidenttypes',
        success: function (accidentTypeArray) {
          $.each(accidentTypeArray, function (index, accidentType) {
            if(accidentType.accidentType == $('#inputAccType').val() || accidentType.accidentType == $('#inputOtherType').val()){
              accidentTypeId = accidentType.typeId;
              //console.log("finished accident types");
              //console.log(accidentTypeId);
            }    
          })
          postAccidentData(locationId, accidentTypeId);
        },
        error: function (xhr) {
          $('#new-accident-post-notification').empty();
          $('#new-accident-post-notification').append("Oh no! There's been an error with the <b>accident type reference</b> in the form.");
          console.log("failed at get accident types");
          console.log(xhr.status);
        }
      });
    },
    error: function (xhr) {
      $('#new-accident-post-notification').empty();
      $('#new-accident-post-notification').append("Oh no! There's been an error with the <b>location reference</b> in the form.");
      console.log("failed at get locations");
      console.log(xhr.status);
    }
  });
}

function postAccidentData(newLocationId, newAccidentTypeId){
  var date = new Date();
  var month = date.getMonth() + 1;
  if(month < 10){
    month = "0" + month.toString();
  }
  var currentDate = date.getFullYear()+ "-" + month + "-" + date.getDate();
  var currentTime = date.getHours() + ":" + date.getMinutes()+ ":" + date.getSeconds();

  console.log("vehicleCount: " + $('#inputVehicleCount').val());
  console.log("accidentTime: " + currentTime);
  console.log("accidentDate: " + currentDate);
  console.log("accidentDesc: " + $('#inputAccDesc').val());
  console.log("locationId: " + newLocationId);
  console.log("accidentTypeId: " + newAccidentTypeId);
  console.log("witnessEmail:" + $('#inputWitnessEmail').val());
  console.log("accidentSeverity: " + $('#inputSeverity').val());

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3333/accident/add',
    data: JSON.stringify({
      vehicleCount: $('#inputVehicleCount').val(),
      accidentTime: currentTime,
      accidentDate: currentDate,
      accidentDesc: $('#inputAccDesc').val(),
      locationId: newLocationId,
      accidentTypeId: newAccidentTypeId,
      witnessEmail: $('#inputWitnessEmail').val(),
      accidentSeverity: $('#inputSeverity').val()
    }),
    contentType: 'application/json',
    accept: 'application/json',
    success: function (data) {
      console.log('accident was created: ' + data);
      $('#new-accident-post-notification').empty();
      $('#new-accident-post-notification').append("Success! The accident has been created and placed on the map.");
    },
    error: function (event, xhr) {
      $('#new-accident-post-notification').empty();
      $('#new-accident-post-notification').append("Oh no! There's been an error with the <b>accident information</b> in the form, please fix accordingly.");
      console.log("failed at post accident");
      alert(event.responseText);
      console.log(event);
      console.log(xhr);
    }
  });
}