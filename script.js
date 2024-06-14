// Add an event listener to the first form to handle the submit event
document.getElementById('form-silo9').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value from the first input field
    const inputValue1 = parseFloat(document.getElementById('inputValue1').value);

    // Calculate using the silo9 function
    const result1 = silo9(inputValue1);

    // Display the result in the first result paragraph
    document.getElementById('result1').textContent = `Silo Lbs: ${result1}`;
});

// Add an event listener to the second form to handle the submit event
document.getElementById('form-silo11').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value from the second input field
    const inputValue2 = parseFloat(document.getElementById('inputValue2').value);

    // Calculate using the silo11 function
    const result2 = silo11(inputValue2);

    // Display the result in the second result paragraph
    document.getElementById('result2').textContent = `Silo Lbs: ${result2}`;
});

// Function to perform the Silo9 calculation
function silo9(value) {
    return value * 9;
}

// Function to perform the Silo11 calculation
function silo11(value) {
    return value * 11;
}
