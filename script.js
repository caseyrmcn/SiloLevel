// Add an event listener to the form to handle the submit event
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the input fields
    const inputValue1 = document.getElementById('inputValue1').value;
    const inputValue2 = document.getElementById('inputValue2').value;

    // Call the calculate functions and store the results
    const result1 = calculateSquare(inputValue1);
    const result2 = calculateDouble(inputValue2);

    // Display the results in the paragraph elements
    document.getElementById('result1').textContent = `Result of squaring: ${result1}`;
    document.getElementById('result2').textContent = `Result of doubling: ${result2}`;
});

// Function to calculate the square of a number
function calculateSquare(value) {
    return value * value;
}

// Function to calculate the double of a number
function calculateDouble(value) {
    return value * 2;
}
