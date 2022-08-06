// Structure
//----------------------------
const form = document.querySelector("form");
const locationInput = document.querySelector(".location");
const nameInput = document.querySelector(".name");
const ratingInput = document.getElementsByName('rate');
const descriptionInput = document.querySelector(".description");
const handicapInput = document.querySelector(".handicap");
const genderNeutralInput = document.querySelector(".genderNeutral");
const singleStallInput = document.querySelector(".singleStall");
const filterHandicap = document.getElementsByClassName("filterHandicap")
const filterGender = document.getElementsByClassName("filterGender")
const filterSingle = document.getElementsByClassName("filterSingle")
const filterNone = document.getElementsByClassName("filterNone")

var button = document.querySelector("button");
var lngLat = Number;

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
  const newLngLat = lngLat;
  const newHandicapBool = handicapInput.checked;
  const newGenderBool = genderNeutralInput.checked;
  const newSingleBool = singleStallInput.checked;

  
  // store in a JSON object
  bathroomObject = {
		location: newLocation,
    thisLngLat: newLngLat,
		name: newName,
    cleanliness: newRating,
    description: newDescription,
    completed: false,
    handicap: newHandicapBool,
    genderNeutral: newGenderBool,
    singleStall: newSingleBool
	}
  
  // pass object into display function
	// displayContact(bathroomObject);
  
  //add object to array
	bathrooms.bathroomList.push(bathroomObject);
    console.log(bathrooms)
  //store in local storage

  localStorage.setItem("bathrooms", JSON.stringify(bathrooms));
  /* firebase stuff

  var shareddatabase = firebase.database(); // put this up at top of htis file

   shareddatabase.ref("bathroomshahaha").push(bathroomObject);



  shareddatabase.ref("bathroomshahaha").on("value", function(snapshot) {
    var data = snapshot.val();
    
    
    
    // clear pins on map
    
    // add pins onto map
    for(var ms in data) {
      console.log(m, data[m]);
      //data[m].cleanliness
    }

  });

  */

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
    console.log(bathroomObject.thisLngLat);
    renderLocations(bathrooms);

}

function printBathroom(bathroom){
    let display = document.querySelector('.display')
    var row = document.createElement("tr");
    
    if (bathroom.handicap) {
      row.classList.add("handicapTrue")
    }

    if (bathroom.singleStall) {
      row.classList.add("singleStallTrue")
    }

    if (bathroom.genderNeutral) {
      row.classList.add("genderNeutralTrue")
    }
    
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
        tbl.setAttribute("id","myTable")
        var tblBody = document.createElement("tbody");
        var headerRow = document.createElement("tr");
        tblBody.appendChild(headerRow);
        var header1 = document.createElement("th");
        var header2 = document.createElement("th");
        var header3 = document.createElement("th");
        var header4 = document.createElement("th");
        var row = document.createElement("tr");
        headerRow.classList.add("handicapTrue")
        headerRow.classList.add("singleStallTrue")
        headerRow.classList.add("genderNeutralTrue")
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
            renderLocations(bathrooms);
    }
    if(document.getElementById("defaultOpen") == null){
      console.log("what")
    } else {
      document.getElementById("defaultOpen").click();
    }
}



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
    let marker = new mapboxgl.Marker()  
    marker.setLngLat(event.lngLat).addTo(map)
    locationInput.value=`${lng}, ${lat}`
    marker.remove();
    lngLat = [lng, lat];
})




function renderLocations(locations){
    locations.bathroomList.forEach(function(d) {

        let marker = new mapboxgl.Marker()    
        marker.setLngLat(d.thisLngLat)
        marker.addTo(map)  
        let string = `<div style="width: 170px"> <h2 style="text-align: left; margin-bottom:8px">${d.name}</h2> Cleanliness <br/> 
        ${drawStar(d.cleanliness)} <br/>  <p style="color:grey; padding:5px 0">${d.description}</p>`

        if (d.handicap) {
          string = string + '<span style="padding: 0 5px">     ♿︎     </span>';
        }

        if (d.genderNeutral) {
          string = string + '<span style="padding: 0 5px">     ⚧     </span>';
        }

        if (d.singleStall) {
          string = string + '<span style="padding: 0 5px">    ⌂     </span>';
        }
    
        let popup = new mapboxgl.Popup()        
        popup.setHTML(string)

        
        marker.setPopup(popup)
    
    })
}

// renderLocations(data);




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
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const currentlngLat = [parseFloat(lng), parseFloat(lat)];

        map.flyTo({center: currentlngLat, zoom: 13});
        
        console.log (name + currentlngLat)

        lngLat = currentlngLat;
        return currentlngLat;

      });
    });
  }

  function openView(evt, viewCity) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(viewCity).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function searchFilter() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    console.log(filter)
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      console.log(td)
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function filter(f) {
    var filter, table, tr;
    filter = f;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    if (f == "null") {
      for (i = 0; i < tr.length; i++){tr[i].style.display = "";}
    } else {
      for (i = 0; i < tr.length; i++) {
        if (tr[i].classList.contains(filter)) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
      }
    }
  }

  document.getElementById("defaultOpen").click();
  pageLoadFn()
    
// Events
//----------------------------
form.addEventListener("submit", addNewBathroom);
// filterHandicap.addEventListener("click", filter('handicapTrue'));
// filterSingle.addEventListener("click", filter('singleStallTrue'));
// filterGender.addEventListener("click", filter('genderNeutralTrue'));

