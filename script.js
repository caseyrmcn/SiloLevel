// Function to calculate for Silo 9 or 10
function calculateSilo9(ft, inches) {
    // Conversion to inches for calculation
    const totalInches = ft * 12 + inches;

    // Fix measurement with height offset
    const siloHeightOne = totalInches - 14;

    // Take measurement and subtract from overall silo height in IN
    const siloHeight = 160 - siloHeightOne ;

    // Take material height and convert to cubed IN
    const matVolumeIn = 15386 * siloHeight;

    // Add cone volume to material volume
    //const totalMaterialVol = matVolumeIn + 307876;

    // Convert cubed IN to Cuber FT
    const totalMaterialFt = matVolumeIn / 1728;


    // Multiply material bulk density by Volume of material
    const siloLb = totalMaterialFt * 40

    const siloNine = siloLb + 7522

    return siloNine ;
}

// Function to calculate for Silo 11 or 12
function calculateSilo11(ft, inches) {
    // Conversion to inches for calculation
    const totalInches = ft * 12 + inches;

    // Fix measurement with height offset
    const siloHeightOne = totalInches - 14;

    // Take measurement and subtract from overall silo height in IN
    const siloHeight = 160 - siloHeightOne ;

    // Take material height and convert to cubed IN
    const matVolumeIn = 15386 * siloHeight;

    // Add cone volume to material volume
    //const totalMaterialVol = matVolumeIn + 307876;

    // Convert cubed IN to Cuber FT
    const totalMaterialFt = matVolumeIn / 1728;


    // Multiply material bulk density by Volume of material
    const siloLb = totalMaterialFt * 42

    const siloEleven = siloLb + 7580

    if (siloEleven > 49000) {
	total = siloEleven - 3500;
    } else if (siloEleven > 39000) {
	total = siloEleven - 1700;
    } else {
	total = siloEleven;
    }
    
    return total;
}

// Event listener for Silo 9 form submission
document.getElementById('form-silo9').addEventListener('submit', function(event) {
    event.preventDefault();
    const ft = parseInt(document.getElementById('inputFt1').value);
    const inches = parseInt(document.getElementById('inputInches1').value);
    const result = calculateSilo9(ft, inches);
    document.getElementById('result1').innerText = `Result: ${result}`;
});

// Event listener for Silo 11 form submission
document.getElementById('form-silo11').addEventListener('submit', function(event) {
    event.preventDefault();
    const ft = parseInt(document.getElementById('inputFt2').value);
    const inches = parseInt(document.getElementById('inputInches2').value);
    const result = calculateSilo11(ft, inches);
    document.getElementById('result2').innerText = `Result: ${result}`;
});
