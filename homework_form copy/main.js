// Structure
//----------------------------
const form = document.querySelector("form");
const locationInput = document.querySelector(".location");
const nameInput = document.querySelector(".name");
const ratingInput = document.getElementsByName('rate');
const descriptionInput = document.querySelector(".description");
var button = document.querySelector("button");


//OBJECT SETUP
//----------------------------
let bathrooms = {
	"bathroomList": []
}

let data = [
    {
        location: [-73.96191,40.80762],
        content: 'I like to eat my lunch here'
    },
    {
        location: [-73.95936,40.80610],
        content: '15 years ago, you could see over the trees'
    },
    {
        location: [-73.96204,40.80994],
        content: 'This was once tennis courts'
    },
    ]


// Event Handlers
//----------------------------
const addNewBathroom = (e) => {
  e.preventDefault();
  
  // variable for values entered in the form
  const newLocation = locationInput.value;
  const newName = nameInput.value;
  var selectedRating = Array.from(ratingInput).find(radio => radio.checked);
  const newRating = selectedRating.value;
  const newDescription = descriptionInput.value;
  
  // store in a JSON object
  bathroomObject = {
		location: newLocation,
		name: newName,
        cleanliness: newRating,
        description: newDescription,
		completed: false,
	}
  
  // pass object into display function
	// displayContact(bathroomObject);
  
  //add object to array
	bathrooms.bathroomList.push(bathroomObject);
    console.log(bathrooms)
  //store in local storage
	localStorage.setItem("bathrooms", JSON.stringify(bathrooms));

	//clear form
	form.reset();

    //Print result
    let display = document.querySelector('.display')
    let bathroomCollection = document.createElement('table')
    display.append(bathroomCollection)
    console.log(bathrooms.bathroomList.length)
    // printTable(bathroomObject);
    var validation = document.createElement("h2")
    let valDisplay = document.querySelector('.validation-space')
    validation.textContent="✓ Thank you for submiting!"
    validation.classList.add("validation");
    while (valDisplay.firstChild){
        valDisplay.removeChild(valDisplay.firstChild)
      }
    valDisplay.appendChild(validation)
    console.log(display.querySelector('table'))
    if (display.querySelector('tbody') == null){
        printTable(bathroomObject)
    } else {
        printBathroom(bathroomObject)
    }

    // printBathrooms()

}

function printBathroom(bathroom){
    let display = document.querySelector('.display')
    var row = document.createElement("tr");
    
    for (var i = 0; i < 4; i++) {
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("td");
      if (i==0) {
        var cellText = document.createTextNode(
        bathroom.location);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.classList.add("location");
      } else if (i==1){
        var cellText = document.createTextNode(
        bathroom.name);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.classList.add("name");
      } else if (i==2){
        var cellText = document.createTextNode(
            drawStar(bathroom.cleanliness) + 
            bathroom.cleanliness
        );
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.classList.add("cleanliness");
      } else if (i==3){
        var cellText = document.createTextNode(
        bathroom.description);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.classList.add("description");
    }
    } 
    if (display.querySelector('tbody') == null){
        printTable(bathroom)
    }else{
        display.querySelector('tbody').appendChild(row);

    }
    
}


function printTable(bathroom){
        let display = document.querySelector('.display')
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var headerRow = document.createElement("tr");
        tblBody.appendChild(headerRow);
        var header1 = document.createElement("th");
        var header2 = document.createElement("th");
        var header3 = document.createElement("th");
        var header4 = document.createElement("th");
        var row = document.createElement("tr");
        for (var i = 0; i < 4; i++) {
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table row
            var cell = document.createElement("td");
            if (i==0) {
              var cellText = document.createTextNode(
              bathroom.location);
              cell.appendChild(cellText);
              row.appendChild(cell);
              cell.classList.add("location");
            } else if (i==1){
              var cellText = document.createTextNode(
              bathroom.name);
              cell.appendChild(cellText);
              row.appendChild(cell);
              cell.classList.add("name");
            } else if (i==2){
              var cellText = document.createTextNode(
                  drawStar(bathroom.cleanliness) + 
                  bathroom.cleanliness
              );
              cell.appendChild(cellText);
              row.appendChild(cell);
              cell.classList.add("cleanliness");
            } else if (i==3){
              var cellText = document.createTextNode(
              bathroom.description);
              cell.appendChild(cellText);
              row.appendChild(cell);
              cell.classList.add("description");
          }
          } 
        header1.textContent="Location"
        header2.textContent="Name"
        header3.textContent="Cleanliness"
        header4.textContent="Description"
        headerRow.appendChild(header1);
        headerRow.appendChild(header2);
        headerRow.appendChild(header3);
        headerRow.appendChild(header4);
        // put <table> in the <body>
        // tbl border attribute to 
        tbl.setAttribute("border", "2");
        tblBody.appendChild(row);
        tbl.appendChild(tblBody);
        display.appendChild(tbl);
   
    // append the <tbody> inside the <table>
}


// function printBathrooms(){
//     let display = document.querySelector('.display')
//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
//     var headerRow = document.createElement("tr");
//     tblBody.appendChild(headerRow);
//     var header1 = document.createElement("th");
//     var header2 = document.createElement("th");
//     var header3 = document.createElement("th");
//     var header4 = document.createElement("th");
//     header1.textContent="Location"
//     header2.textContent="Name"
//     header3.textContent="Cleanliness"
//     header4.textContent="Description"
//     headerRow.appendChild(header1);
//     headerRow.appendChild(header2);
//     headerRow.appendChild(header3);
//     headerRow.appendChild(header4);


//     for (var j = 0; j <= (bathrooms.bathroomList.length-1) ; j++) {
//         // table row creation
//         var row = document.createElement("tr");
    
//         for (var i = 0; i < 4; i++) {
//           // create element <td> and text node 
//           //Make text node the contents of <td> element
//           // put <td> at end of the table row
//           var cell = document.createElement("td");
//           if (i==0) {
//             var cellText = document.createTextNode(
//             bathrooms.bathroomList[j].location);
//             cell.appendChild(cellText);
//             row.appendChild(cell);
//             cell.classList.add("location");
//           } else if (i==1){
//             var cellText = document.createTextNode(
//             bathrooms.bathroomList[j].name);
//             cell.appendChild(cellText);
//             row.appendChild(cell);
//             cell.classList.add("name");
//           } else if (i==2){
//             var cellText = document.createTextNode(
//                 drawStar(bathrooms.bathroomList[j].cleanliness) + 
//                 bathrooms.bathroomList[j].cleanliness
//             );
//             cell.appendChild(cellText);
//             row.appendChild(cell);
//             cell.classList.add("cleanliness");
//           } else if (i==3){
//             var cellText = document.createTextNode(
//             bathrooms.bathroomList[j].description);
//             cell.appendChild(cellText);
//             row.appendChild(cell);
//             cell.classList.add("description");
//         }
//         }
    
//         //row added to end of table body
//         tblBody.appendChild(row);
//       }
//     // append the <tbody> inside the <table>
//   tbl.appendChild(tblBody);
//   // put <table> in the <body>
//   // tbl border attribute to 
//   tbl.setAttribute("border", "2");
//   while (display.firstChild){
//     display.removeChild(display.firstChild)
//   }
//   var validation = document.createElement("h2")
//   validation.textContent="✓ Thank you for submiting!"
//   validation.classList.add("validation");
//   display.appendChild(validation);
//   display.appendChild(tbl);
// }


function drawStar(int){
    var stars = " "
    if (int == 1){
        stars =  "★"
    } else if (int == 2){
        stars =  "★★"
    } else if (int == 3){
        stars =  "★★★"
    } else if (int == 4){
        stars =  "★★★★"
    } else if (int == 5){
        stars =  "★★★★★"
    } 
    return stars
}


function pageLoadFn(){
    if (localStorage.getItem('bathrooms')==null){
        return
    } else {
            bathrooms = JSON.parse(localStorage.getItem('bathrooms'))
            bathrooms.bathroomList.forEach(printBathroom)
    }
}

pageLoadFn()




// MAP RELATED JS
//-----------------
// create an instance of NavigationControl
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

// add the scale to your map
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

map.addControl(geolocate, 'top-right')

// this is an event handler
geolocate.on('geolocate', function(event) {

    // create new variables to store the attributes we're interested in from the event
    let lng = event.coords.longitude
    let lat = event.coords.latitude

    // debug
    console.log('geolocated:', lng, lat)

    // format lng lat values and display them on our 'info' element
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})

map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})


function renderLocations(locations){
    locations.forEach(function(d) {

        let marker = new mapboxgl.Marker()    
        marker.setLngLat(d.location)
        marker.addTo(map)  
    
        let popup = new mapboxgl.Popup()
        popup.setHTML(d.content)
        marker.setPopup(popup)
    
    })
}

renderLocations(data);




// GOOGLE MAPS


function initAutocomplete() {
    
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
  

  
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
  
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }

        const name = place.name;
        const position = place.geometry.location;
        
        console.log (name + position)
      });
    });
  }
  


// Events
//----------------------------
form.addEventListener("submit", addNewBathroom);