// Structure
//----------------------------
const form = document.querySelector("form");
const nameInput = document.querySelector(".name");
const descriptionInput = document.querySelector(".description");
const cultureInput = document.querySelector(".culture");
const healthInput = document.querySelector(".health");
const childrenInput = document.querySelector(".children");
const filterHandicap = document.getElementsByClassName("filterHandicap")
const filterGender = document.getElementsByClassName("filterGender")
const filterSingle = document.getElementsByClassName("filterSingle")
const filterNone = document.getElementsByClassName("filterNone")
var button = document.querySelector("button");
console.log(map)

var lngLat = Number;

//OBJECT SETUP
//----------------------------
let places = {
	"placeList": []
}

let suggestions = {
	"suggestionList": []
}

let users = {
	"userList": []
}

// placeObject = {
//   location: newLocation,
//   thisLngLat: newLngLat,
//   name: newName,
//   suggestions: newSuggestionList,
//   description: newDescription,
//   renewDate: newDate,
//   rating: newRating
// }

// suggestionObject = {
//   place: place,
//   name: newName,
//   score: newScore,
//   description: newDescription
// }

// userObject = {
//   location: newLocation,
//   thisLngLat: newLngLat,
//   name: newName,
//   suggestions: suggestionList
// }

let user1 = {
  location: 'APT 16, 141 Mott, NY, NY, 10013',
  thisLngLat: [-73.99679929999999, 40.7186996],
  name: 'Zoe Lin',
  suggestions: null
}

let user2 = {
  location: 'APT 13, 139 Eldridge, NY, NY, 10002',
  thisLngLat: [-73.9917492, 40.7192191],
  name: 'Sabrina Krebs',
  suggestions: null
}


let place1 = {
  location: "139 Eldridge",
  thisLngLat: [-73.9917492, 40.7192191],
  name: "Dance With Me",
  description: 'Staffed by the dancers of our community, Dance With Me hosts social dance parties and dance lesson. Join us, experts and beginners, to Cha Cha, Bolero, Swing, Mambo, Paso Doble, Waltz, Tango, Foxtrot, QuickStep, Viennese Waltz, Merengue, Salsa, Rumba, Samba, Hip Hop & Contemporary dance your worries away!',
  renewDate: new Date(2042, 6, 01) ,
  suggestions: null,
  rating: '4'
}

let place2 = {
  location: "141 Mott",
  thisLngLat: [-73.99679929999999, 40.7186996],
  name: "Laundromat Bar",
  description: 'First Laundromat Bar in NYC, thanks to the inginuity of our community! Waiting for your sheets to dry no longer needs to be boring an tedious; Come do your late night laundry and share a night cap with your wonderful neighbors as you watch them tumble!',
  renewDate: new Date(2042, 11, 15) ,
  suggestions: null,
  rating: '5'
}

let suggestion1 = {
  place: place2,
  name: 'newName',
  score: 'newScore',
  description: 'suggestion1'
}

let suggestion2 = {
place: place2,
name: 'newName',
score: 'newScore',
description: 'suggestion2'
}
let suggestion3 = {
  place: place1,
  name: 'newName',
  score: 'newScore',
  description: 'suggestion3'
  }

place1.suggestions = [suggestion1, suggestion2];
places.placeList.push(place1);
places.placeList.push(place2);
user1.suggestions = [suggestion2, suggestion3];
users.userList.push(user1);
console.log(places)
console.log(users)


// Event Handlers
//----------------------------
const addNewSuggestion = (e) => {
  e.preventDefault();
  
  // variable for values entered in the form
  const newName = nameInput.value;
  const newDescription = descriptionInput.value;
  const newLngLat = lngLat;
  const newCultureBool = cultureInput.checked;
  const newHealthBool = healthInput.checked;
  const newChildrenBool = childrenInput.checked;

  
  // store in a JSON object
  suggestionObject = {
    thisLngLat: newLngLat,
		name: newName,
    description: newDescription,
    culture: newCultureBool,
    health: newHealthBool,
    children: newChildrenBool,
    score: Number(1),
	}
  
  // pass object into display function
	// displayContact(bathroomObject);
  
  //add object to array
	suggestions.suggestionList.push(suggestionObject);
    console.log(suggestions)
  //store in local storage

  localStorage.setItem("suggestions", JSON.stringify(suggestions));
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
    // let suggestionnCollection = document.createElement('table')
    // display.append(suggestionnCollection)
    var validation = document.createElement("h2")
    let valDisplay = document.querySelector('.validation-space')
    validation.textContent="✓ Thank you for submiting!"
    validation.classList.add("validation");
    while (valDisplay.firstChild){
        valDisplay.removeChild(valDisplay.firstChild)
      }
    valDisplay.appendChild(validation)
    printSuggestion(suggestionObject)
}

function printSuggestion(suggestion) {
  let display = document.querySelector(".display");
  let suggestionBox = document.createElement("div")
  let suggestionName = document.createElement("h2")
  let suggestionDescription = document.createElement("p")
  let suggestionScore = document.createElement("section")
  let scoreContainer = document.createElement("div")
  let commentAdd = document.createElement("textarea")
  let button = document.createElement("button")
  let commentArea = document.createElement("div")
  let commentSections = document.createElement("div")
  commentAdd.id = "newComment"
  commentAdd.placeholder = "Add comments…"
  button.id = "addComments"
  commentArea.id = "commentArea"
  button.innerText = "Add Comment"
  commentSections.classList.add("commentSections")
  scoreContainer.classList.add("scoreContainer")
  suggestionBox.id="suggestionBox"
  suggestionName.classList.add("suggestionName")
  suggestionDescription.classList.add("suggestionDescription")
  suggestionScore.classList.add("suggestionScore")


  console.log(suggestion.name)
  console.log(suggestion.description)
  suggestionName.innerText = suggestion.name
  suggestionDescription.innerText = suggestion.description
  suggestionScore.innerText = "Like"

  suggestionBox.appendChild(suggestionName)
  suggestionBox.appendChild(suggestionDescription)
  scoreContainer.appendChild(suggestionScore)
  suggestionBox.appendChild(scoreContainer)
  commentSections.appendChild(commentArea)
  commentSections.appendChild(commentAdd)
  commentSections.appendChild(button)
  suggestionBox.appendChild(commentSections)



  display.appendChild(suggestionBox)

}

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
    if (localStorage.getItem('suggestions')==null){
        return
    } else {
      suggestions = JSON.parse(localStorage.getItem('suggestions'))
      suggestions.suggestionList.forEach(printSuggestion)
    }
    // suggestions.suggestionList.forEach(printSuggestion)
    // if(document.getElementById("defaultOpen") == null){
    //   console.log("what")
    // } else {
    //   document.getElementById("defaultOpen").click();
    // }
}


// MAP RELATED JS
//-----------------
// create an instance of NavigationControl
// let navigation = new mapboxgl.NavigationControl({
//     showCompass: false
// })

// add the navigation to your map
// map.addControl(navigation, 'top-right')

// // create an instance of ScaleControl
// let scale = new mapboxgl.ScaleControl({
//     maxWidth: 80,
//     unit: 'imperial'
// })

// // add the scale to your map
// map.addControl(scale, 'bottom-right')

// let geolocate = new mapboxgl.GeolocateControl({
//     positionOptions: {
//         enableHighAccuracy: true
//     },
//     trackUserLocation: true,
//     showUserLocation: true,
//     fitBoundsOptions: {
//     }
// })

// map.addControl(geolocate, 'top-right')

// // this is an event handler
// geolocate.on('geolocate', function(event) {

//     // create new variables to store the attributes we're interested in from the event
//     let lng = event.coords.longitude
//     let lat = event.coords.latitude

//     // debug
//     console.log('geolocated:', lng, lat)

//     // format lng lat values and display them on our 'info' element
//     document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

// })


function renderLocations(locations){
    locations.placeList.forEach(function(d) {
        let marker = new mapboxgl.Marker()    
        marker.setLngLat(d.thisLngLat)
        marker.addTo(map)  
        let string = `<div style="width: 170px"> <h2 style="text-align: left; margin-top:10px; margin-bottom:8px">${d.name}</h2>
        ${drawStar(d.rating)} <br/> <p style="color:grey; padding:5px 0">${d.description}</p> <br/> 
        <button class="future">Future</button>`
        let popup = new mapboxgl.Popup()        
        popup.setHTML(string)
        console.log(string)
        marker.setPopup(popup)
        console.log("pop up set")
    })
}



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
    var input, filter, table, tr, td, i, nameValue, locationValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      tdn = tr[i].getElementsByTagName("td")[0];
      tdl = tr[i].getElementsByTagName("td")[2];
      if (tdn) {
        nameValue = tdn.textContent || tdn.innerText;
        locationValue = tdl.textContent || tdl.innerText;
        if (nameValue.toUpperCase().indexOf(filter) > -1 || locationValue.toUpperCase().indexOf(filter) > -1) {
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

  pageLoadFn()

  map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat
    
    console.log("clicked:", lng, lat)
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)
    // let marker = new mapboxgl.Marker()  
    // marker.setLngLat(event.lngLat).addTo(map)
    locationInput.value=`${lng}, ${lat}`
    // marker.remove();
    lngLat = [lng, lat];
})
    
// Events
//----------------------------

document.querySelectorAll('le').forEach(e => e.addEventListener("click", function() {
  console.log(this)
  this.className = this.className.replace(" active", "");
  evt.currentTarget.className += " active";
}))




document.querySelectorAll('tr')
.forEach(e => e.addEventListener("click", function() {
    // Here, `this` refers to the element the event was hooked on
    let lngLat = e.dataset.lnglat.split(',')
    console.log(lngLat)
    map.flyTo({center: lngLat, zoom: 15});

}));
form.addEventListener("submit", addNewSuggestion);
// filterHandicap.addEventListener("click", filter('handicapTrue'));
// filterSingle.addEventListener("click", filter('singleStallTrue'));
// filterGender.addEventListener("click", filter('genderNeutralTrue'));




//Comment Section
// const commentContainer = document.getElementById('commentArea');
document.querySelectorAll('[id=addComments]')
.forEach(e => e.addEventListener("click", function(e) {
   addComment(e, this.parentElement);
}));

function addComment(ev, parent) {
    let textBox = document.createElement('div');
    textBox.classList.add("comment")
    // let replyButton = document.createElement('button');
    // replyButton.className = 'reply';
    // replyButton.innerHTML = 'Reply';
    // remember if adding back to add to wrapDiv
    let likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    let wrapDiv = document.createElement('div');
    wrapDiv.className = 'wrapper';
    let commentText = parent.querySelector('#newComment').value;
    parent.querySelector('#newComment').value = '';
    textBox.innerHTML = commentText;
    wrapDiv.append(textBox, likeButton, deleteButton);
    console.log(wrapDiv)
    parent.querySelector("#commentArea").appendChild(wrapDiv);
    
}

function hasClass(elem, className) {
  return elem.className.split(' ').indexOf(className) > -1;
}

document.querySelectorAll('[id=commentArea]')
.forEach(e => e.addEventListener("click", function(e) {
  // if (hasClass(e.target, 'reply')) {
  //     const parentDiv = e.target.parentElement;
  //     const wrapDiv = document.createElement('div');
  //     wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
  //     wrapDiv.className = 'wrapper';
  //     const textArea = document.createElement('textarea');
  //     textArea.style.marginRight = '20px';
  //     const addButton = document.createElement('button');
  //     addButton.className = 'addReply';
  //     addButton.innerHTML = 'Add';
  //     const cancelButton = document.createElement('button');
  //     cancelButton.innerHTML = 'Cancel';
  //     cancelButton.className='cancelReply';
  //     wrapDiv.append(textArea, addButton, cancelButton);
  //     parentDiv.appendChild(wrapDiv);
  // } else 
  if  (hasClass(e.target, 'addReply')) {
      addComment(e);
  } else if(hasClass(e.target, 'likeComment')) {
       const likeBtnValue = e.target.innerHTML;
       e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseFloat(likeBtnValue) + 0.9 : 0.9;
  } else if(hasClass(e.target, 'cancelReply')) {
      e.target.parentElement.innerHTML = '';
  } else if(hasClass(e.target, 'deleteComment')) {
      e.target.parentElement.remove();
  }
}));


document.querySelectorAll('[id=suggestionBox]')
.forEach(e => e.addEventListener("click", function(e) {
  if(hasClass(e.target, 'suggestionScore')) {
  let likeBtnValue = e.target.innerHTML
   e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseFloat(likeBtnValue) + .9 : 0.9;
  console.log("yes")
}
}));

// function addComment(ev) {
//   let commentText, wrapDiv;
//   const textBox = document.createElement('div');
//   const replyButton = document.createElement('button');
//   replyButton.className = 'reply';
//   replyButton.innerHTML = 'Reply';
//   const likeButton = document.createElement('button');
//   likeButton.innerHTML = 'Like';
//   likeButton.className = 'likeComment';
//   const deleteButton = document.createElement('button');
//   deleteButton.innerHTML = 'Delete';
//   deleteButton.className = 'deleteComment';
//   if(hasClass(ev.target.parentElement, 'container')) {
//       const wrapDiv = document.createElement('div');
//       wrapDiv.className = 'wrapper';
//       wrapDiv.style.marginLeft = 0;
//       commentText = document.getElementById('comment').value;
//       document.getElementById('comment').value = '';
//       textBox.innerHTML = commentText;
//       wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
//       commentContainer.appendChild(wrapDiv);
//   } else {
//       wrapDiv = ev.target.parentElement;
//       commentText = ev.target.parentElement.firstElementChild.value;
//       textBox.innerHTML = commentText;
//       wrapDiv.innerHTML = '';
//       wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
//   }
// }

let dist_lng = Math.abs(user2.thisLngLat[0]-map._markers[0]._lngLat.lng)
let dist_lat = Math.abs(user2.thisLngLat[1]-map._markers[0]._lngLat.lat)
let dist_score = Math.sqrt((Math.pow(dist_lng, 2)+ Math.pow(dist_lat, 2)))
console.log(user2.thisLngLat[0])
console.log(map._markers[0]._lngLat.lng)
console.log(dist_score)

