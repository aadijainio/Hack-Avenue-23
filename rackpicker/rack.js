//mait coordinates 28.71217
//app.js:32 77.0679477

function getRandomLocation(latitude, longitude, radius) {
  // Convert radius from meters to degrees
  var radiusInDegrees = radius / 111000;

  // Generate a random distance and angle
  var u = Math.random();
  var v = Math.random();
  var w = radiusInDegrees * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  // Adjust the x-coordinate for the shrinking of the east-west distances
  var newLongitude = x / Math.cos(latitude);

  // Calculate the new latitude and longitude
  var newLatitude = latitude + y;
  newLongitude = longitude + newLongitude;

  return { lat: newLatitude, lng: newLongitude };
}
x = navigator.geolocation;

x.getCurrentPosition(success, failure);

function success(position) {
  // fetch coordinates

  var mylat = position.coords.latitude;
  var mylong = position.coords.longitude;
  console.log(mylat);
  console.log(mylong);
  // google api ready latitude and longitude string

  var coords = new google.maps.LatLng(mylat, mylong);
  // var coords = new google.maps.LatLng(-34, 151);
  // setting up out google map

  var mapOptions = {
    zoom: 16,
    center: { lat: mylat, lng: mylong },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  // mapTypeId: google.maps.MapTypeId.ROADMAP
  // CREATING MAP

  // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    map: map,
    position: coords,
  });
  //randomly marking the location of kabadiwalas

  var marker = new google.maps.Marker({
    map: map,
    position: { lat: 28.712533152029486, lng: 77.06654889250827 },
  });
  var myLocation = { lat: mylat, lng: mylong };
  var randomLocation = getRandomLocation(myLocation.lat, myLocation.lng, 1000);

  console.log(randomLocation); // Output: {lat: 28.71936805223836, lng: 77.05842556750348}
  var marker = new google.maps.Marker({
    map: map,
    position: randomLocation,
  });
  var myLocation = { lat: mylat, lng: mylong };
  var randomLocation = getRandomLocation(myLocation.lat, myLocation.lng, 1000);

  console.log(randomLocation); // Output: {lat: 28.71936805223836, lng: 77.05842556750348}
  var marker = new google.maps.Marker({
    map: map,
    position: randomLocation,
  });
  var myLocation = { lat: mylat, lng: mylong };
  var randomLocation = getRandomLocation(myLocation.lat, myLocation.lng, 1000);

  console.log(randomLocation); // Output: {lat: 28.71936805223836, lng: 77.05842556750348}
  var marker = new google.maps.Marker({
    map: map,
    position: randomLocation,
  });
  var myLocation = { lat: mylat, lng: mylong };
  var randomLocation = getRandomLocation(myLocation.lat, myLocation.lng, 1000);

  console.log(randomLocation); // Output: {lat: 28.71936805223836, lng: 77.05842556750348}
  var marker = new google.maps.Marker({
    map: map,
    position: randomLocation,
  });
  var myLocation = { lat: mylat, lng: mylong };
  var randomLocation = getRandomLocation(myLocation.lat, myLocation.lng, 1000);

  console.log(randomLocation); // Output: {lat: 28.71936805223836, lng: 77.05842556750348}
  var marker = new google.maps.Marker({
    map: map,
    position: randomLocation,
  });
  var myLocation = { lat: mylat, lng: mylong };
  var randomLocation = getRandomLocation(myLocation.lat, myLocation.lng, 1000);

  console.log(randomLocation); // Output: {lat: 28.71936805223836, lng: 77.05842556750348}
  var marker = new google.maps.Marker({
    map: map,
    position: randomLocation,
  });
  var myLocation = { lat: mylat, lng: mylong };
  var randomLocation = getRandomLocation(myLocation.lat, myLocation.lng, 1000);

  console.log(randomLocation); // Output: {lat: 28.71936805223836, lng: 77.05842556750348}
  var marker = new google.maps.Marker({
    map: map,
    position: randomLocation,
  });
  var myLocation = { lat: mylat, lng: mylong };
  var randomLocation = getRandomLocation(myLocation.lat, myLocation.lng, 1000);

  console.log(randomLocation); // Output: {lat: 28.71936805223836, lng: 77.05842556750348}
  var marker = new google.maps.Marker({
    map: map,
    position: randomLocation,
  });
}

function failure() {
  $("#lat").html("<h3> No co-ordinates available!</h3>");
}
