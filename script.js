const units = {
    length: [
        { name: "Metros", factor: 1, symbol: "m" },
        { name: "Quilômetros", factor: 1000, symbol: "km" },
        { name: "Centímetros", factor: 0.01, symbol: "cm" },
        { name: "Milímetros", factor: 0.001, symbol: "mm" },
        { name: "Micrômetros", factor: 1e-6, symbol: "µm" },
        { name: "Nanômetros", factor: 1e-9, symbol: "nm" },
        { name: "Milhas", factor: 1609.34, symbol: "mi" },
        { name: "Jardas", factor: 0.9144, symbol: "yd" },
        { name: "Pés", factor: 0.3048, symbol: "ft" },
        { name: "Polegadas", factor: 0.0254, symbol: "in" }
    ],
    volume: [
        { name: "Litros", factor: 1, symbol: "L" },
        { name: "Mililitros", factor: 0.001, symbol: "mL" },
        { name: "Metros cúbicos", factor: 1000, symbol: "m³" },
        { name: "Centímetros cúbicos", factor: 0.001, symbol: "cm³" },
        { name: "Milímetros cúbicos", factor: 1e-6, symbol: "mm³" },
        { name: "Galões (US)", factor: 3.78541, symbol: "gal (US)" },
        { name: "Galões (UK)", factor: 4.54609, symbol: "gal (UK)" }
    ],
    area: [
        { name: "Metros quadrados", factor: 1, symbol: "m²" },
        { name: "Centímetros quadrados", factor: 0.0001, symbol: "cm²" },
        { name: "Milímetros quadrados", factor: 1e-6, symbol: "mm²" },
        { name: "Hectares", factor: 10000, symbol: "ha" },
        { name: "Acres", factor: 4046.86, symbol: "ac" }
    ]
};

function populateUnits() {
    const category = document.getElementById('category').value;
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');

    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';

    units[category].forEach(unit => {
        const option = document.createElement('option');
        option.value = unit.factor;
        option.text = unit.name;
        option.dataset.symbol = unit.symbol;
        inputUnit.appendChild(option);

        const option2 = document.createElement('option');
        option2.value = unit.factor;
        option2.text = unit.name;
        option2.dataset.symbol = unit.symbol;
        outputUnit.appendChild(option2);
    });
}

function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');

    const inputFactor = parseFloat(inputUnit.value);
    const outputFactor = parseFloat(outputUnit.value);

    const result = (inputValue * inputFactor) / outputFactor;

    const inputSymbol = inputUnit.options[inputUnit.selectedIndex].dataset.symbol;
    const outputSymbol = outputUnit.options[outputUnit.selectedIndex].dataset.symbol;

    document.getElementById('result').innerHTML = `
        ${result.toFixed(2)} ${outputSymbol} 
        <span>(${inputValue} ${inputSymbol})</span>
    `;
}

function reset() {
    document.getElementById('inputValue').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('category').value = 'length';
    populateUnits();
}

window.onload = function() {
    populateUnits();
};

