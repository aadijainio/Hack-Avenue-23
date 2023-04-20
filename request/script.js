const titles = [
  "Garbage pick-up",
  "Biodegradable garbage pickup",
  "Non-Biodegradable garbage pickup ",
  "Recycleable garbage pickup",
];

const descriptions = [
  "Prabhnoor singh requested garbage pickup at location given on the map.",
  "Aadi jain requested garbage pickup at location given on the map.",
  "Anurag choudhury requested garbage pickup at location given on the map.",
  "Dhuruv goyal requested garbage pickup at location given on the map.",
  "Yatin goyal requested garbage pickup at location given on the map.",
];

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

const numRequests = Math.floor(Math.random() * 10) + 1; // generate a random number of requests between 1 and 10

const requestsContainer = document.getElementById("requests-container");

for (let i = 0; i < numRequests; i++) {
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  const requestElement = document.createElement("div");
  requestElement.classList.add("request");
  requestElement.classList.add("boxy");

  const titleElement = document.createElement("h2");
  titleElement.innerText = randomTitle;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = randomDescription;
  const buttonElement = document.createElement("a");
  buttonElement.innerText = "maps";
  buttonElement.classList.add("map-btn");
  x = navigator.geolocation;
  x.getCurrentPosition(success, failure);

  let mylat;
  var mylong;

  function success(position) {
    // fetch coordinates

    var mylat = position.coords.latitude;
    var mylong = position.coords.longitude;

    // google api ready latitude and longitude string

    var coords = new google.maps.LatLng(mylat, mylong);
    // var coords = new google.maps.LatLng(-34, 151);
    // setting up out google map
    var myLocation = { lat: mylat, lng: mylong };
    var randomLocation = getRandomLocation(
      myLocation.lat,
      myLocation.lng,
      1000
    );
    console.log(mylat);
    console.log(mylong);
    mylat = mylat.toString();
    mylong = mylong.toString();
  }
  function failure() {
    $("#lat").html("<h3> No co-ordinates available!</h3>");
  }

  // console.log(x);

  console.log(mylat);
  console.log(mylong);
  // buttonElement.href = `https://www.google.com/maps/dir/${mylat},${mylong}`;
  // buttonElement.href = `https://www.google.com/maps/dir/28.6497737082171,77.13875073997447`;
  buttonElement.href = `https://www.google.com/maps/dir/28.646288,77.141355`;
  requestElement.appendChild(titleElement);
  requestElement.appendChild(descriptionElement);
  requestElement.appendChild(buttonElement);

  requestsContainer.appendChild(requestElement);
}
