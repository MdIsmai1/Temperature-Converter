const celsiusField = document.querySelector("#celsius");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
const resultValue = document.querySelector("#result-value");

// window loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
    resultValue.textContent = ""; // Clear the result field
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTemperature();
});

function convertTemperature() {
    let inputValue = parseFloat(degree.value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    const selectedConversion = tempType.value; // Get the selected conversion type

    if (selectedConversion === "fahrenheit") {
        // Convert to Fahrenheit
        const fahrenheit = (inputValue * 9/5) + 32;
        resultValue.textContent = `Result (Fahrenheit): ${fahrenheit.toFixed(2)}`;
    } else if (selectedConversion === "kelvin") {
        // Convert to Kelvin
        const kelvin = inputValue + 273.15;
        resultValue.textContent = `Result (Kelvin): ${kelvin.toFixed(2)}`;
    }
}
