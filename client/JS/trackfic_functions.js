$('document').ready(function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
});

function allAccidents() {
  var selectElement = document.querySelector('#state_dd');
  var stateOutput = selectElement.value;

  $('div#allAccidents').empty();

  var checkboxed = [];
  $(':checkbox:checked').each(function (i) {
    checkboxed[i] = $(this).val();
  });

  var typeIds = [];
  var typeList = [];
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3333/accidenttype/accidenttypes',
    success: function (accidentTypeArray) {
      //for each accidenttype
      $.each(accidentTypeArray, function (index, accidentType) {
        typeIds[index] = accidentType.typeId;
        typeList[index] = accidentType.accidentType;
      })
    },
    error: function (event, xhr) {
      var err = JSON.parse(event.responseText);
      var notify = $('#display_acc_error');
      notify.empty();
      notify.append(err.details);
    }
  });

  var locationIds = [];
  var locationList = [];
  var locationStates = [];
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
    },
    error: function (event, xhr) {
      var err = JSON.parse(event.responseText);
      var notify = $('#display_acc_error');
      notify.empty();
      notify.append(err.details);
    }
  });

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
        accidentInfo += '<b>Accident Type:</b> ' + typeList[index] + '<br>';
        accidentInfo += '<b>Vehicles Involved:</b> ' + accident.vehicleCount + '<br>';
        accidentInfo += '<b>Recorded at:</b> ' + accident.accidentTime + ' on ' + accident.accidentDate + '<br>';
        accidentInfo += '<b>Located at:</b> ' + locationList[index] + '<br>';
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
    error: function (event, xhr) {
      var err = JSON.parse(event.responseText);
      var notify = $('#display_acc_error');
      notify.empty();
      notify.append(err.details);
    }
  });
}
