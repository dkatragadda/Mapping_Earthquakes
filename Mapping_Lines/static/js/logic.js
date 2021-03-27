// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      39.0997, -94.5786
    ],
    zoom: 5
  });
 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
tileSize: 512,
maxZoom: 18,
zoomOffset: -1,
id: 'mapbox/streets-v11',
//id: 'mapbox/dark-v10',
//id: 'mapbox/satellite-streets-v11',
accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: 'orange',
//         fillColor: '#ffffa1',
//         lineWeight: 4
//     }).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map)
//    });

// Coordinates for each point (SFO, AUS, YYZ, JFK airports) to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  opacity: 0.5,
  dashArray: '20,20'
}).addTo(map);

