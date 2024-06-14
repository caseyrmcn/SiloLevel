// Add an event listener to the form to handle the submit event
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value from the input field
    const inputValue = document.getElementById('inputValue').value;

    // Call the calculate function and store the result
    const result = calculate(inputValue);

    // Display the result in the paragraph element
    document.getElementById('result').textContent = `Result: ${result}`;
});

// Function to perform the calculation
function calculate(value) {
    // Simple calculation example: return the square of the input value
    return value * value;
}
