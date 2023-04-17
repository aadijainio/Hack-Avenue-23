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

// }

// // function failure() {}(g) => {
// var h,
//   a,
//   k,
//   p = "The Google Maps JavaScript API",
//   c = "google",
//   l = "importLibrary",
//   q = "__ib__",
//   m = document,
//   b = window;
// b = b[c] || (b[c] = {});
// var d = b.maps || (b.maps = {}),
//   r = new Set(),
//   e = new URLSearchParams(),
//   u = () =>
//     h ||
//     (h = new Promise(async (f, n) => {
//       await (a = m.createElement("script"));
//       e.set("libraries", [...r] + "");
//       for (k in g)
//         e.set(
//           k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
//           g[k]
//         );
//       e.set("callback", c + ".maps." + q);
//       a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
//       d[q] = f;
//       a.onerror = () => (h = n(Error(p + " could not load.")));
//       a.nonce = m.querySelector("script[nonce]")?.nonce || "";
//       m.head.append(a);
//     }));
// d[l]
//   ? console.warn(p + " only loads once. Ignoring:", g)
//   : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
// ({
//   key: "AIzaSyA9bBt_iEQx1l2U0R73BRAorPoXoopMIXY",
//   // Add other bootstrap parameters as needed, using camel case.
//   // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
// });
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
}

function failure() {
  $("#lat").html("<h3> No co-ordinates available!</h3>");
}
