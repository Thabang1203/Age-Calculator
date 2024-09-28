// Get the form element by its ID and add an event listener for form submission

document.getElementById("ageForm").addEventListener("submit", function(event) {

// Prevent the form from submitting the traditional way

event.preventDefault();

// Get the date of birth value entered by the user from the input field

let dob = new Date(document.getElementById("Data of Birth").value);

// Check if the input is a valid date

if (isNaN(dob.getTime())){

// If the input is not a valid date, show an error message

    document.getElementById("Answer").innerText = "Please enter a valid date";

    // Stop further execution

    return;
}

// Get the current date

let today = new Date();

// Calculate the age by subtracting the birth year from the current year

let age = today.getFullYear()-dob.getFullYear();

// Get the difference between the current month and the bith month

let month = today.getMonth-dob.getMonth();

// Get the difference between the current day and the bith day

let day = today.getDate()-dob.getDate();

// If the birth month hasn't occured yet this year or the birth day is yet to come,
// Subtract 1 from the age

if (month <0 || (month === 0 && day<0)) {
    age--;
}

// Display the calculated age in the answer div

document.getElementById("Answer").innerText = "You are :  " + age + "  years old";
});