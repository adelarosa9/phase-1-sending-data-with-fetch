function submitData(name, email) {
    // Configuration object for the fetch request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    };
  
    // Performing the fetch request and returning the fetch chain
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        // Parsing the response body as JSON
        return response.json();
      })
      .then(function (object) {
        // Accessing the newly converted object and appending the new id to the DOM
        document.body.innerHTML = object.id;
      })
      .catch(function (error) {
        // Handling errors by appending the error message to the DOM
        document.body.innerHTML = error.message;
      });
  }
  
  // Testing the function
  submitData("John Doe", "john@example.com");
  