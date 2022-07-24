// Structure
//----------------------------
const form = document.querySelector("form");
const locationInput = document.querySelector(".location");
const nameInput = document.querySelector(".name");
var button = document.querySelector("button");


//OBJECT SETUP
//----------------------------
const bathrooms = {
	"bathroomList": []
}

// Events
//----------------------------
form.addEventListener("submit", addNewBathroom);


// Event Handlers
//----------------------------
const addNewBathroom = (e) => {
  e.preventDefault();
  
  // variable for values entered in the form
  const newLocation = locationInput.value;
  const newName = nameInput.value;
  
  // store in a JSON object
  bathroomObject = {
		location: newLocation,
		name: newName,
		completed: false,
	}
  
  // pass object into display function
	// displayContact(bathroomObject);
  
  //add object to array
	bathrooms.bathroomList.push(bathroomObject);
    console.log(bathrooms)
  //store in local storage
	// localStorage.setItem("bathrooms", JSON.stringify(bathrooms));

	//clear form
	form.reset();
}