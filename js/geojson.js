let map = L.map("map").setView([39.75621, -104.98404], 10);
let tileLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
let states = [
  {
    type: "Feature",
    properties: { party: "Republican" },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-104.05, 48.99],
          [-97.22, 48.98],
          [-96.58, 45.94],
          [-104.03, 45.94],
          [-104.05, 48.99],
        ],
      ],
    },
  },
  {
    type: "Feature",
    properties: { party: "Democrat" },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-109.05, 41.0],
          [-102.06, 40.99],
          [-102.03, 36.99],
          [-109.04, 36.99],
          [-109.05, 41.0],
        ],
      ],
    },
  },
];

let geojsonData = L.geoJSON(states, {
  style: function (feature) {
    switch (feature.properties.party) {
      case "Republican":
        return { color: "#ff0000" };
      case "Democrat":
        return { color: "#0000ff" };
    }
  },
}).addTo(map);

console.log(geojsonData, "polygon");

// display some geojson points
let someFeatures = [
  {
    type: "Feature",
    properties: {
      name: "Coors Field",
      show_on_map: true,
    },
    geometry: {
      type: "Point",
      coordinates: [-104.99404, 39.75621],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Busch Field",
      show_on_map: true,
    },
    geometry: {
      type: "Point",
      coordinates: [-104.98404, 39.74621],
    },
  },
];

L.geoJSON(someFeatures, {
  filter: function (feature, layer) {
    return feature.properties.show_on_map;
  },
}).addTo(map);
