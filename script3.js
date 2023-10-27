document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // You can access and process the form data here
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let feedback = document.getElementById("feedback").value;
    let rating = document.getElementById("rating").value;

    // For example, you can log the data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Age: " + age);
    console.log("Feedback: " + feedback);
    console.log("Rating: " + rating);
});