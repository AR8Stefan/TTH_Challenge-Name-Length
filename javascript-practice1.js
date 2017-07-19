var firstName = prompt("Type your first name: ");
var lastName = prompt("Type your last name: ");

var fullName = firstName.toLocaleUpperCase() + " " + lastName.toLocaleUpperCase();

var countName = fullName.length;

alert("Your name \"" + fullName + "\" is " + countName + " characters long.");

document.write("Refresh the page to start again.");
