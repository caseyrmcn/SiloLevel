// Add an event listener to the first form to handle the submit event
document.getElementById('form-square').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value from the first input field
    const inputValue1 = parseFloat(document.getElementById('inputValue1').value);

    // Calculate the square of the input value
    const result1 = inputValue1 * inputValue1;

    // Display the result in the first result paragraph
    document.getElementById('result1').textContent = `Result of squaring: ${result1}`;
});

// Add an event listener to the second form to handle the submit event
document.getElementById('form-double').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value from the second input field
    const inputValue2 = parseFloat(document.getElementById('inputValue2').value);

    // Calculate the double of the input value
    const result2 = inputValue2 * 2;

    // Display the result in the second result paragraph
    document.getElementById('result2').textContent = `Result of doubling: ${result2}`;
});
