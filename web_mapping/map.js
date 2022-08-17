mapboxgl.accessToken = "pk.eyJ1Ijoiem9lbGluMTEyMiIsImEiOiJjbDZlNzBpaWEwMHR3M2VzZTFtbjc0azlkIn0.8zDjJUVT6PoiR8tj6Re7bA";
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/zoelin1122/cl6fajblf003j14qqr70gulqi",
    zoom: 12,
    center: [-74, 40.725]
});

console.log("hi")
map.on('load', function () {
    // let mapLayers = map.getStyle().layers;
    // for (let i = 0; i < mapLayers.length; i++) {
    //     console.log(mapLayers[i].id);
        
    // }
    // map.addLayer({
    //     'id': 'citibikeData',
    //     'type': 'circle',
    //     'source': {
    //         'type': 'geojson',
    //         'data': 'data/citiGeo.geojson'
    //     },
    //     'paint': {
    //         'circle-color': ['interpolate', ['linear'], ['get', 'difference'],
    //             0, '#ffffff',
    //             50, '#ffba31',
    //             100, '#ff4400',
    //         ],
    //         'circle-stroke-color': '#4d4d4d',
    //         'circle-stroke-width': 0.5,
    //         'circle-radius': ['interpolate', ['exponential', 2], ['zoom'],
    //             10.5, ['interpolate', ['linear'], ['get', 'difference'],
    //                 0, 1,
    //                 100, 5],
    //             15, ['interpolate', ['linear'], ['get', 'difference'],
    //                 0, 5,
    //                 100, 80]
    //         ]
    //     }
    // }, 'road-label-simple');
    
    map.addLayer({
        'id': 'mhhi',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/medianIncome.geojson'
        },
        'paint': {
            'fill-color': ['step', ['get', 'MHHI'],
                '#ffffff',
                20000, '#ccedf5',
                50000, '#99daea',
                75000, '#66c7e0',
                100000, '#33b5d5',
                150000, '#00a2ca'],
            'fill-opacity': ['case', ['==', ['get', 'MHHI'], null], 0, 0.65]
        }
    },);

    // map.addLayer({
    //     'id': 'emptylots',
    //     'type': 'circle',
    //     'source': {
    //         'type': 'geojson',
    //         'data': 'data/emptyLots.geojson'
    //     },
    //     'paint': {
    //         'circle-color': '#00FF00',
    //         'circle-stroke-color': '#00FF00',
    //         'circle-stroke-width': 0.5,
    //         'circle-radius': 3
    //     }
    // },)

    // map.addLayer({
    //     'id': 'emptylotsinuse',
    //     'type': 'circle',
    //     'source': {
    //         'type': 'geojson',
    //         'data': 'data/emptyLotsInUse.geojson'
    //     },
    //     'paint': {
    //         'circle-color': '#ff0000',
    //         'circle-stroke-color': '#ff0000',
    //         'circle-stroke-width': 0.5,
    //         'circle-radius': 3
    //     }
    // },)

    map.addLayer({
        'id': 'vacantRetail',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/Storefronts_Vancancy.geojson'
        },
        'paint': {
            'circle-color': '#ff7f50',
            // 'circle-stroke-color': '#4d4d4d',
            // 'circle-stroke-width': 0.5,
            'circle-radius': ['interpolate', ['exponential', 3], ['zoom'],
                5,
                3
            ]
        }
    },)
    
});

// map.on('click', 'citibikeData', function(e){
//     let stationID = e.features[0].properties["start station id"];
//     let countweek1 = e.features[0].properties["countWeek1"];
//     let countweek4 = e.features[0].properties["countWeek4"];
//     let difference = e.features[0].properties["difference"];

//     new mapboxgl.Popup()
//         .setLngLat(e.lngLat)
//         .setHTML(stationID + '<br>' + difference + '%' + '<br>' + countweek1 + '<br>' + countweek4)
//         .addTo(map);
// });

// map.on('mouseenter', 'citibikeData', function(){
//     map.getCanvas().style.cursor = 'pointer';
// });
// map.on('mouseleave', 'citibikeData', function(){
//     map.getCanvas().style.cursor = '';
// });

map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat
    

    console.log("clicked:", lng, lat)

    // document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)
    let marker = new mapboxgl.Marker({ "color": "#b40219" })
    marker.setLngLat(event.lngLat).addTo(map)
    locationInput.value=`${lng}, ${lat}`
    // marker.remove();
    // lngLat = [lng, lat];
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-right')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})