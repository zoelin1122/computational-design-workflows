// Structure
//----------------------------
const form = document.querySelector("form");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
var button = document.querySelector("button");


//OBJECT SETUP
//----------------------------
const contact = {
	"contactList": []
}

// Events
//----------------------------
form.addEventListener("submit", addNewContact);


// Event Handlers
//----------------------------
const addNewContact = (e) => {
  e.preventDefault();
  
  // variable for values entered in the form
  const newName = nameInput.value;
  const newEmail = emailInput.value;
  
  // store in a JSON object
  contactObject = {
		name: newName,
		email: newEmail,
		completed: false,
	}
  
  // pass object into display function
	// displayContact(contactObject);
  
  //add object to array
	contact.contactList.push(contactObject);
  console.log(contact)
  //store in local storage
	// localStorage.setItem("contact", JSON.stringify(contact));

	//clear form
	form.reset();
}