$('document').ready(function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  // Determine if is the first time on this page
  if (!sessionStorage.getItem("beenHereBefore")) {
    sessionStorage.setItem('beenHereBefore', 'true');
    //console.log('have not been here!');
    sessionStorage.setItem('activePage', '1');
    sessionStorage.setItem('isLoggedIn', 'false');
    //console.log('intial values set');
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
  if(sessionStorage.getItem('activePage') == '5'){
    //console.log("Its equal to 5!");
    loginSignup();
  }
  if(sessionStorage.getItem('activePage') == '6'){
    //console.log("Its equal to 6!");
    showProfile();
  }
});

function showHomePage(){
  $('.new-accident').hide();
  $('.all-accidents').hide();
  $('.view-map').hide();
  $('.login-signup').hide();
  $('.profile').hide();
  $('.home-page').show();

  if(sessionStorage.getItem("isLoggedIn") == 'true'){
        $('#login-btn').hide();
        $('#signup-btn').hide();
        $('#profile-btn').show();
        $('#logout-btn').show();
  } else {
        $('#login-btn').show();
        $('#signup-btn').show();
        $('#profile-btn').hide();
        $('#logout-btn').hide();
  }
  
  document.getElementById('profile-btn').disabled = false;

  sessionStorage.setItem("activePage", '1');
  //console.log("sessionStorage: " + sessionStorage.getItem('activePage'))

  document.getElementById('home-page-nav-link').classList.remove('active');
  document.getElementById('new-accident-nav-link').classList.add('active');
  document.getElementById('view-map-nav-link').classList.add('active');
  document.getElementById('all-accidents-nav-link').classList.add('active');
}

function showNewAccident(){
	
	if(sessionStorage.getItem('isLoggedIn') == 'false')
		{
		alert("Sorry, you must be logged in to use this feature");
		return;
		}
  $('.all-accidents').hide();
  $('.home-page').hide();
  $('.view-map').hide();
  $('.login-signup').hide();
  $('.profile').hide();
  $('.new-accident').show();

  if(sessionStorage.getItem("isLoggedIn") == 'true'){
        $('#login-btn').hide();
        $('#signup-btn').hide();
        $('#profile-btn').show();
        $('#logout-btn').show();
  } else {
        $('#login-btn').show();
        $('#signup-btn').show();
        $('#profile-btn').hide();
        $('#logout-btn').hide();
  }
  
  document.getElementById('profile-btn').disabled = false;

  sessionStorage.setItem("activePage", '2');
  //console.log("sessionStorage: " + sessionStorage.getItem('activePage'))

  document.getElementById('home-page-nav-link').classList.add('active');
  document.getElementById('new-accident-nav-link').classList.remove('active');
  document.getElementById('view-map-nav-link').classList.add('active');
  document.getElementById('all-accidents-nav-link').classList.add('active');
}

function showMap(){
  $('.new-accident').hide();
  $('.home-page').hide();
  $('.all-accidents').hide();
  $('.login-signup').hide();
  $('.profile').hide();
  $('.view-map').show();
  viewMap();

  if(sessionStorage.getItem("isLoggedIn") == 'true'){
        $('#login-btn').hide();
        $('#signup-btn').hide();
        $('#profile-btn').show();
        $('#logout-btn').show();
  } else {
        $('#login-btn').show();
        $('#signup-btn').show();
        $('#profile-btn').hide();
        $('#logout-btn').hide();
  }
  
  document.getElementById('profile-btn').disabled = false;

  sessionStorage.setItem("activePage", '3');
  //console.log("sessionStorage: " + sessionStorage.getItem('activePage'))

  document.getElementById('home-page-nav-link').classList.add('active');
  document.getElementById('new-accident-nav-link').classList.add('active');
  document.getElementById('view-map-nav-link').classList.remove('active');
  document.getElementById('all-accidents-nav-link').classList.add('active');
}

function showAllAccidents(){
  $('.new-accident').hide();
  $('.home-page').hide();
  $('.view-map').hide();
  $('.login-signup').hide();
  $('.profile').hide();
  $('.all-accidents').show();
  allAccidents();

  if(sessionStorage.getItem("isLoggedIn") == 'true'){
        $('#login-btn').hide();
        $('#signup-btn').hide();
        $('#profile-btn').show();
        $('#logout-btn').show();
  } else {
        $('#login-btn').show();
        $('#signup-btn').show();
        $('#profile-btn').hide();
        $('#logout-btn').hide();
  }
  
  document.getElementById('profile-btn').disabled = false;

  sessionStorage.setItem("activePage", '4');
  //console.log("sessionStorage: " + sessionStorage.getItem('activePage'))

  document.getElementById('home-page-nav-link').classList.add('active');
  document.getElementById('new-accident-nav-link').classList.add('active');
  document.getElementById('view-map-nav-link').classList.add('active');
  document.getElementById('all-accidents-nav-link').classList.remove('active');
}

function loginSignup(){
  $('.new-accident').hide();
  $('.home-page').hide();
  $('.view-map').hide();
  $('.all-accidents').hide();
  $('.profile').hide();
  $('.login-signup').show();

  document.getElementById('login-btn').disabled = true;
  document.getElementById('signup-btn').disabled = true;
  document.getElementById('profile-btn').disabled = false;

  sessionStorage.setItem("activePage", '5');
  //console.log("sessionStorage: " + sessionStorage.getItem('activePage'))

  document.getElementById('home-page-nav-link').classList.add('active');
  document.getElementById('new-accident-nav-link').classList.add('active');
  document.getElementById('view-map-nav-link').classList.add('active');
  document.getElementById('all-accidents-nav-link').classList.add('active');
  
  /////////////////////////////////////////////////////
  //  		Logs in and directs to profile
  ////////////////////////////////////////////////////
  $(document).ready(function(){
	    $('#loginSubmit').on("click",function(){
	      $.ajax({
			    type: 'POST',
			    url: 'http://localhost:3333/witness/login',
			    data: JSON.stringify({
			        email: $('#loginEmail').val(),
			        password: $('#loginPassword').val()
			    }),
			    contentType: 'application/json',
			    accept: 'application/json',
			    success: function (data) {
			    	alert("success")
			        
			    	
			    	//set the user to be logged in
			    	
//			    	user = data;
//			    	isLoggedIn=true;
			    	
			    	sessionStorage.setItem('user', JSON.stringify(data));
			    	sessionStorage.setItem('isLoggedIn', 'true');
			    	
			    	showProfile();
			    },
			    error: function (xhr) {
//				      var err = JSON.parse(xhr.responseText);
//				      alert(err.details + ": " + err.message);
				      alert("Sorry, cannot find a match on the given credentials")
				     
				    }   
		  });
	    });
	  });
  
 /////////////////////////////////////////////////////
 //  		Adds the user and directs to profile
 ////////////////////////////////////////////////////
 
  $(document).ready(function(){
	    $('#signupSubmit').on("click",function(){
	      $.ajax({
			    type: 'POST',
			    url: 'http://localhost:3333/witness/add',
			    data: JSON.stringify({
			    	  firstName:$('#signupFirstName').val(),
			      	lastName:$('#signupLastName').val(),
			      	mobile:$('#signupMobile').val(),
			        email: $('#signupEmail').val(),
			        password: $('#signupPassword').val()
			    }),
			    contentType: 'application/json',
			    accept: 'application/json',
			    success: function (data) {
			    	alert("success")
			        
			    	console.log(data);
			    	//set the user to be logged in			    	
			    	sessionStorage.setItem('user', JSON.stringify(data));
			    	sessionStorage.setItem('isLoggedIn', 'true');
			    	showProfile();
			    },
			    error: function (xhr) {
				      var err = JSON.parse(xhr.responseText);
				      alert(err.details + ": " + err.message);    
				  }   
		  });
	    });
	  });
}

function showProfile(){
  $('.new-accident').hide();
  $('.home-page').hide();
  $('.view-map').hide();
  $('.all-accidents').hide();
  $('.login-signup').hide();
  $('.profile').show();

  if(sessionStorage.getItem("isLoggedIn") == 'true'){
    $('#login-btn').hide();
    $('#signup-btn').hide();
    $('#profile-btn').show();
    $('#logout-btn').show();
  } else {
    $('#login-btn').show();
    $('#signup-btn').show();
    $('#profile-btn').hide();
    $('#logout-btn').hide();
  }
  
  document.getElementById('profile-btn').disabled = true;

  var userData = JSON.parse(sessionStorage.getItem('user'));

  $('#allUsersAccidents').empty();
  allUserAccidents(userData.email);

  $('#getProfileFirstName').empty();
  $('#getProfileFirstName').append(userData.firstName);
  $('#profileEditFirstNameInput').val(userData.firstName);
  $('#profileEditLastNameInput').val(userData.lastName);
  $('#profileEditMobileInput').val(userData.mobile);
  $('#profileEditEmailInput').val(userData.email);
  $('#profileEditPasswordInput').val(userData.password);

  document.getElementById('profileEditFirstNameInput').disabled = true;
  document.getElementById('profileEditLastNameInput').disabled = true;
  document.getElementById('profileEditMobileInput').disabled = true;
  document.getElementById('profileEditPasswordInput').disabled = true;
  document.getElementById('profileEditPasswordInput').type = "password";
  
  $('#editProfileDetails').show();
  $('#profileConfirmPassword').hide();
  $('#cancelWitnessEdit').hide();
  $('#confirmWitnessEdit').hide();
  
  sessionStorage.setItem("activePage", '6');
  //console.log("sessionStorage: " + sessionStorage.getItem('activePage'))

  document.getElementById('home-page-nav-link').classList.add('active');
  document.getElementById('new-accident-nav-link').classList.add('active');
  document.getElementById('view-map-nav-link').classList.add('active');
  document.getElementById('all-accidents-nav-link').classList.add('active');
}

function updateProfileDetails(){

  document.getElementById('profileEditFirstNameInput').disabled = false;
  document.getElementById('profileEditLastNameInput').disabled = false;
  document.getElementById('profileEditMobileInput').disabled = false;
  document.getElementById('profileEditPasswordInput').disabled = false;
  document.getElementById('profileEditPasswordInput').type = "text";

  $('#editProfileDetails').hide();
  $('#profileConfirmPassword').show();
  $('#cancelWitnessEdit').show();
  $('#confirmWitnessEdit').show();

}

function cancelProfileEdit(){
  document.getElementById('profileEditFirstNameInput').disabled = true;
  document.getElementById('profileEditLastNameInput').disabled = true;
  document.getElementById('profileEditMobileInput').disabled = true;
  document.getElementById('profileEditPasswordInput').disabled = true;
  document.getElementById('profileEditPasswordInput').type = "password";

  var userData = JSON.parse(sessionStorage.getItem('user'));
  $('#profileEditFirstNameInput').val(userData.firstName);
  $('#profileEditLastNameInput').val(userData.lastName);
  $('#profileEditMobileInput').val(userData.mobile);
  $('#profileEditPasswordInput').val(userData.password);

  $('#editProfileDetails').show();
  $('#profileConfirmPassword').hide();
  $('#cancelWitnessEdit').hide();
  $('#confirmWitnessEdit').hide();
}

function confirmProfileEdit(){
  var userData = JSON.parse(sessionStorage.getItem('user'));
  if($('#profileEditPasswordInput').val() != $('#profileConfirmPasswordInput').val()){
    alert("Your new password does not match the confirmed password.");
    cancelProfileEdit();
  } else {
    $.ajax({
      type: 'PUT',
      url: 'http://localhost:3333/witness/' + userData.email,
      data: JSON.stringify({
        email: userData.email,
        firstName: $('#profileEditFirstNameInput').val(),
        lastName: $('#profileEditLastNameInput').val(),
        mobile: $('#profileEditMobileInput').val(),
        password: $('#profileEditPasswordInput').val()
      }),
      contentType: 'application/json',
      accept: 'application/json',
      success: function (data) {
          ///alert that accident updated
          alert('Profile details updated successfully!');
          sessionStorage.setItem('user', JSON.stringify(data));
          showProfile();
      },
      error: function (xhr) {
        var err = JSON.parse(xhr.responseText);
        alert(err.details + ": " + err.message);    
      } 
    });
  }
}

function logoutUser(){
	alert('logging out...');
	sessionStorage.removeItem('user');
	sessionStorage.setItem('isLoggedIn', 'false');
	showHomePage();
}

function viewMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -25, lng: 135  },
    zoom: 4,
  });

  var locationIds = [];
  var locationList = [];
  var locationLat = [];
  var locationLng = [];
  
  var typeIds = [];
  var typeList = [];
  
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3333/location/locations',
    success: function (locationArray) {
      //for each location
      $.each(locationArray, function (index, location) {

        locationIds[location.locationId] = location.locationId;

        var locationData = "";
        locationData += location.suburb + " ";
        locationData += location.postcode + ", ";
        locationData += location.state;

        locationList[location.locationId] = locationData;
        locationLat[location.locationId] = location.latitude;
        locationLng[location.locationId] = location.longitude;
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
              $.each(accidentArray, function (index, accident) {
        
                var contentString = '<div id="content">';
                contentString += '<h3>' + typeList[accident.accidentTypeId-1] + '</h3><div><p>';

                if(accident.accidentDesc != ""){
                  contentString += "<b>Accident Description:</b> " + accident.accidentDesc + "<br>";
                }
                contentString += '<b>Accident Type:</b> ' + typeList[accident.accidentTypeId-1] + '<br>';
                contentString += '<b>Severity:</b> ' + accident.accidentSeverity + '<br>';
                contentString += '<b>Vehicles Involved:</b> ' + accident.vehicleCount + '<br>';
                contentString += '<b>Recorded at:</b> ' + accident.accidentTime + ' on ' + accident.accidentDate + '<br></p>';
                contentString += "</div></div>";

                const infowindow = new google.maps.InfoWindow({
                  content: contentString,
                  ariaLabel: typeList[accident.accidentTypeId-1],
                });

                var severityIcon = "";
                if(accident.accidentSeverity == "Minor"){
                  severityIcon = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
                } else if (accident.accidentSeverity == "Major"){
                  severityIcon = "http://maps.google.com/mapfiles/ms/icons/orange-dot.png";
                } else {
                  severityIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
                }

                const marker = new google.maps.Marker({
                  position: { lat: locationLat[accident.locationId], lng: locationLng[accident.locationId]  },
                  map,
                  title: typeList[accident.accidentTypeId-1] + " at " + locationList[accident.locationId],
                  icon: severityIcon
                });
              
                marker.addListener("click", () => {
                  infowindow.open({
                    anchor: marker,
                    map,
                  });
                });
              })
            },
            error: function (xhr) {
              var err = JSON.parse(xhr.responseText);
              alert(err.details + ": " + err.message);
            }
          });
        },
        error: function (xhr) {
          var err = JSON.parse(xhr.responseText);
          alert(err.details + ": " + err.message);
        }
      });
    },
    error: function (xhr) {
      var err = JSON.parse(xhr.responseText);
      alert(err.details + ": " + err.message);
    }
  });

}

function allUserAccidents(userEmail){

  // get the user's accidents and display them here very similar to allAccidents()
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

        locationIds[location.locationId] = location.locationId;

        var locationData = "";
        locationData += location.streetNumber + " ";
        locationData += location.streetName + ", ";
        locationData += location.suburb + " ";
        locationData += location.postcode + ", ";
        locationData += location.state;

        locationList[location.locationId] = locationData;
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
            url: 'http://localhost:3333/accident/bywitnessemail/' + userEmail,
            success: function (accidentArray) {
              var userAccidentDiv = $('div#allUsersAccidents');
              if(accidentArray.length == 0){
            	  userAccidentDiv.append("<h6 class='text-center py-5'>There are no accidents to display!</h6>");
              }

              $.each(accidentArray, function (index, accident) {
        
                var accidentInfo = '<div class="row"><div class="col-9 col-lg-10">';
                accidentInfo += '<p style="margin-left: 4%; margin-right: 1%; margin-bottom: 0px">';
                if(accident.accidentDesc != ""){
                  accidentInfo += "<b>Accident Description:</b> " + accident.accidentDesc + "<br>";
                }
                accidentInfo += '<b>Accident Type:</b> ' + typeList[accident.accidentTypeId-1] + '<br>';
                accidentInfo += '<b>Vehicles Involved:</b> ' + accident.vehicleCount + '<br>';
                accidentInfo += '<b>Recorded at:</b> ' + accident.accidentTime + ' on ' + accident.accidentDate + '<br>';
                accidentInfo += '<b>Located at:</b> ' + locationList[accident.locationId] + '<br>';
                accidentInfo += '<b>Severity:</b> ' + accident.accidentSeverity + '<br>';
                accidentInfo += "</p></div>";
                accidentInfo += "<div class='col-2 d-flex align-items-center'>";
                accidentInfo += "<button type='button' onclick='deleteSelectedReport(" + accident.accidentId + "," + accident.locationId + ")' data-toggle='modal' data-target='#deleteSelectedReport' class='btn btn-danger'>Delete</button>";
                accidentInfo += "</div></div><hr style='margin: 10px auto; width: 95%'>";

                userAccidentDiv.append(accidentInfo);
              })
            },
            error: function (xhr) {
              var err = JSON.parse(xhr.responseText);
              alert(err.details + ": " + err.message);
            }
          });
        },
        error: function (xhr) {
          var err = JSON.parse(xhr.responseText);
          alert(err.details + ": " + err.message);
        }
      });
    },
    error: function (xhr) {
      var err = JSON.parse(xhr.responseText);
      alert(err.details + ": " + err.message);
    }
  });
}

function deleteSelectedReport(accidentId, locationId){
  $('#deleteSelectedReport').attr('accidentId', accidentId);
  $('#deleteSelectedReport').attr('locationId', locationId);
}

function deleteReport(){
  var selectedAccidentId = $('#deleteSelectedReport').attr('accidentId');
  var selectedLocationId = $('#deleteSelectedReport').attr('locationId');

  $.ajax({
    type: 'DELETE',
    url: 'http://localhost:3333/accident/' + selectedAccidentId,
    success: function () {
      alert('The accident has been deleted successfully.');
        //Log deletion
        $.ajax({
          type: 'DELETE',
          url: 'http://localhost:3333/location/' + selectedLocationId,
          success: function () {
              alert('The location has been deleted successfully.');
              //Log deletion
              location.reload();
          },
          error: function (xhr) {
            var err = JSON.parse(xhr.responseText);
            alert(err.details + ": " + err.message);
          }
        });
    },
    error: function (xhr) {
      var err = JSON.parse(xhr.responseText);
      alert(err.details + ": " + err.message);
    }
  });
  
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
        locationIds[location.locationId] = location.locationId;

        var locationData = "";
        locationData += location.streetNumber + " ";
        locationData += location.streetName + ", ";
        locationData += location.suburb + " ";
        locationData += location.postcode + ", ";
        locationData += location.state;

        locationList[location.locationId] = locationData;
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
              $.each(accidentArray, function (index, accident) {
                var accidentInfo = '<p style="margin-left: 10px;">';
                if(accident.accidentDesc != ""){
                  accidentInfo += "<b>Accident Description:</b> " + accident.accidentDesc + "<br>";
                }
                accidentInfo += '<b>Accident Type:</b> ' + typeList[accident.accidentTypeId-1] + '<br>';
                accidentInfo += '<b>Vehicles Involved:</b> ' + accident.vehicleCount + '<br>';
                accidentInfo += '<b>Recorded at:</b> ' + accident.accidentTime + ' on ' + accident.accidentDate + '<br>';
                accidentInfo += '<b>Located at:</b> ' + locationList[accident.locationId] + '<br>';
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
            error: function (xhr) {
              var err = JSON.parse(xhr.responseText);
              alert(err.details + ": " + err.message);
            }
          });
        },
        error: function (xhr) {
          var err = JSON.parse(xhr.responseText);
          alert(err.details + ": " + err.message);
        }
      });
    },
    error: function (xhr) {
      var err = JSON.parse(xhr.responseText);
      alert(err.details + ": " + err.message);
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

      document.getElementById('inputStreetNum').disabled = true;
      document.getElementById('inputStreetName').disabled = true;
      document.getElementById('inputSuburb').disabled = true;
      document.getElementById('inputPostcode').disabled = true;
      document.getElementById('inputState').disabled = true;
    };

    const errorCallback = (error) => {
      $('#coordsError').html('<h6 class="pt-3" style="color: darkred">Geolocation is not supported by this browser, please enter your address manually.</h6>');
      
      document.getElementById('inputLatitude').disabled = true;
      document.getElementById('inputLongitude').disabled = true;

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
  if($('#inputAccType').val() == "Other"){
    document.getElementById('inputAccDesc').required = true;
    $('#inputAccDescLabel').html('Accident Description <span style="color:red">*</span>');
  } else {
    document.getElementById('inputAccDesc').required = false;
    $('#inputAccDescLabel').html('Accident Description');
  }
}

$(document).ready(function(){
  $('#addAccident').on("click", function(event) {
      event.preventDefault();

      const api = "AIzaSyBIV-yfyLwbrQh7fGqgrkMFHGXGjgn6258";

      // set relevant location data to fill it in
      var reverseGeocodingUrl = "";
      //console.log($('#inputLatitude').val());
      if($('#inputLatitude').val() != ""){
        reverseGeocodingUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + $('#inputLatitude').val() + "," + $('#inputLongitude').val() + "&key=" + api;

        $.ajax({
          type: 'GET',
          url: reverseGeocodingUrl,
          success: function(data) {
            $('#inputStreetNum').val(data.results[0].address_components[0].long_name);
            $('#inputStreetName').val(data.results[0].address_components[1].short_name);
            $('#inputSuburb').val(data.results[0].address_components[2].long_name);
            $('#inputState').val(data.results[0].address_components[4].short_name);
            $('#inputPostcode').val(data.results[0].address_components[6].long_name);
            // console.log($('#inputStreetNum').val());
            // console.log($('#inputStreetName').val());
            // console.log($('#inputSuburb').val());
            // console.log($('#inputState').val());
            // console.log($('#inputPostcode').val());
  
            postLocationData();
        },
        error: function (xhr) {
          var err = JSON.parse(xhr.responseText);
          alert(err.details + ": " + err.message);
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
          console.log(jsonData);
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

        getRelevantAccidentData();
    },
    error: function (xhr) {
      var err = JSON.parse(xhr.responseText);
      alert(err.details + ": " + err.message);
    
      $('#new-accident-post-notification').empty();
      $('#new-accident-post-notification').append("Oh no! There's been an error with the <b>location information</b> in the form, please fix accordingly.");
    }
  })
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
            if(accidentType.accidentType == $('#inputAccType').val()){
              accidentTypeId = accidentType.typeId;
              //console.log("finished accident types");
              //console.log(accidentTypeId);
            }    
          })
          postAccidentData(locationId, accidentTypeId);
        },
        error: function (xhr) {
          var err = JSON.parse(xhr.responseText);
          alert(err.details + ": " + err.message);
        
          $('#new-accident-post-notification').empty();
          $('#new-accident-post-notification').append("Oh no! There's been an error with the <b>accident type reference</b> in the form.");
        }
      });
    },
    error: function (xhr) {
      var err = JSON.parse(xhr.responseText);
      alert(err.details + ": " + err.message);
    
      $('#new-accident-post-notification').empty();
      $('#new-accident-post-notification').append("Oh no! There's been an error with the <b>location reference</b> in the form.");
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
      
      var frm = document.getElementById('new-accident-addForm');
      frm.reset();
      window.scrollTo(0, 0);
      
      document.getElementById('inputStreetNum').disabled = false;
      document.getElementById('inputStreetNum').required = true;
      $('#streetNumLabel').html('Street No. <span style="color:red">*</span>');
      
      document.getElementById('inputStreetName').disabled = false;
      document.getElementById('inputStreetName').required = true;
      $('#streetNameLabel').html('Street Name <span style="color:red">*</span>');
      
      document.getElementById('inputSuburb').disabled = false;
      document.getElementById('inputSuburb').required = true;
      $('#suburbLabel').html('Suburb <span style="color:red">*</span>');
      
      document.getElementById('inputPostcode').disabled = false;
      document.getElementById('inputPostcode').required = true;
      $('#postcodeLabel').html('Postcode <span style="color:red">*</span>');
      
      document.getElementById('inputState').disabled = false;
      document.getElementById('inputState').required = true;
      $('#stateLabel').html('State <span style="color:red">*</span>');
        
      document.getElementById('inputLatitude').disabled = false;
      document.getElementById('inputLatitude').required = true;
      $('#latitudeLabel').html('Latitude <span style="color:red">*</span>');
      
      document.getElementById('inputLongitude').disabled = false;
      document.getElementById('inputLongitude').required = true;
      $('#longitudeLabel').html('Longitude <span style="color:red">*</span>');
      
      
      $('#new-accident-post-notification').empty();
      $('#new-accident-post-notification').append("Success! The accident has been created and placed on the map.");
    },
    error: function (xhr) {
      var err = JSON.parse(xhr.responseText);
      alert(err.details + ": " + err.message);
    
      $('#new-accident-post-notification').empty();
      $('#new-accident-post-notification').append("Oh no! There's been an error with the <b>accident information</b> in the form, please fix accordingly.");
    }
  });
}