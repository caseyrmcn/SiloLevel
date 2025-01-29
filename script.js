// Function to calculate for Silo 9 or 10
function calculateSilo9(ft, inches) {
    // Conversion to inches for calculation
    totalInches = ft * 12 + inches;

    // Fix measurement with height offset
    siloHeightOne = totalInches - 12

    //Depending on input decide between cone measurement formula and silo measurement
    if (siloHeightOne > 159) {
        //Cone measurement find height percentage and translate to radius
        //With new cone dimensions run formula for volume of a cone 1/3 * PI * radiusSquared * height
        //tranlate volume into LB = V / 1728 * Bulk density
        coneHeight = 220 - siloHeightOne;
        coneHeightPercent = coneHeight / 60
        coneRadius = 70 * coneHeightPercent
        coneRadiusSquared = coneRadius * coneRadius
        coneRadiusTotal = 0.33 * 3.14 * coneRadiusSquared * coneHeight;
        coneTotal = coneRadiusTotal / 1728 * 40.35
        return coneTotal;
    } else {
        siloHeight = 160 - siloHeightOne;
        matVolumeIn = 15386 * siloHeight;
        totalMaterialFt = matVolumeIn / 1728;
        siloLb = totalMaterialFt * 40.35
        siloNine = siloLb + 7051
        return siloNine
    }
}

// Function to calculate for Silo 11 or 12
function calculateSilo11(ft, inches) {
    // Conversion to inches for calculation
    totalInches = ft * 12 + inches;

    // Fix measurement with height offset
    siloHeightOne = totalInches - 12

    //Depending on input decide between cone measurement formula and silo measurement
    if (siloHeightOne > 159) {
        //Cone measurement find height percentage and translate to radius
        //With new cone dimensions run formula for volume of a cone 1/3 * PI * radiusSquared * height
        //tranlate volume into LB = V / 1728 * Bulk density
        coneHeight = 220 - siloHeightOne;
        coneHeightPercent = coneHeight / 60
        coneRadius = 70 * coneHeightPercent
        coneRadiusSquared = coneRadius * coneRadius
        coneRadiusTotal = 0.33 * 3.14 * coneRadiusSquared * coneHeight;
        coneTotal = coneRadiusTotal / 1728 * 44
        return coneTotal;
    } else {
	    siloHeight = 160 - siloHeightOne;
        matVolumeIn = 15386 * siloHeight;
        totalMaterialFt = matVolumeIn / 1728;
        siloLb = totalMaterialFt * 44;
        siloEleven = siloLb + 7580;
        if (siloEleven < 58000) {
            total = siloEleven;
        } else if (siloEleven > 58000) {
            total = siloEleven - 3500;
        }else {
            total = siloEleven;
        }
        return total;
    }
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
