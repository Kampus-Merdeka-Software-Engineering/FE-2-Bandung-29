// Replace 'https://api.example.com/data' with the actual API endpoint
const apiUrl = 'https://aware-slip-newt.cyclic.app/';

// Use the fetch function to make a GET request
fetch(apiUrl)
    .then(response => {
        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Process the data
        console.log('Data from the API:', data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
    });
