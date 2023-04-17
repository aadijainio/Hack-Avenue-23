// let map;

// async function initMap() {
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();

// x = navigator.geolocation;
// x.getCurrentPosition(success, failure);

// function success(position) {
//   var myLat = position.coords.latitude;
//   var myLong = position.coords.longitude;

//   var coords = new google.maps.LatLng(myLat, myLong);

//   var mapOptions = {
//     zoom: 10,
//     center: coords,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//   };
//   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//   var marker = new google.maps.Marker({
//     map: map,
//     position: coords,
//   });
// }

// function failure() {}

x = navigator.geolocation;

x.getCurrentPosition(success, failure);

function success(position) {
  // fetch coordinates

  var mylat = position.coords.latitude;
  var mylong = position.coords.longitude;
  console.log(mylat);
  console.log(mylong);
  // google api ready latitude and longitude string

  // var coords = new google.maps.LatLng(mylat, mylong);
  // var coords = new google.maps.LatLng(-34, 151);
  // setting up out google map

  var mapOptions = {
    zoom: 16,
    center: { lat: mylat, lng: mylong },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  // mapTypeId: google.maps.MapTypeId.ROADMAP
  // CREATING MAP

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function failure() {
  $("#lat").html("<h3> No co-ordinates available!</h3>");
}
