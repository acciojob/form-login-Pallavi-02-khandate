function getFormvalue() {
    //Write your code here

	    // Prevent page reload
    event.preventDefault();

    // Get the form
    const form = document.getElementById("form1");

    // Read input values
    let firstName = form.fname.value.trim();
    let lastName = form.lname.value.trim();

    // Show full name
    alert(firstName + " " + lastName);


	
	
}
