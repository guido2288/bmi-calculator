// Elementos del DOM

const inputHeight = document.getElementById('inputHeight');
const inputWeight = document.getElementById('inputWeight');
const resultDisplay = document.querySelector('.result-display');
const metricRadio = document.getElementById('metric');
const imperialRadio = document.getElementById('imperial');
const heightDisplay = document.getElementById('heightDisplay');
const weightDisplay = document.getElementById('weightDisplay');

const calculateBMI = () => {

    const height = parseFloat(inputHeight.value);
    const weight = parseFloat(inputWeight.value);

    if( isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0 ) {
        resultDisplay.innerHTML = `<h3>Error</h3><p>Please enter valid values.</p>`;
        return;
    }

    let bmi;

    if(metricRadio.checked) {
        bmi = weight / ( (height / 100) ** 2 );
    } else {
        bmi = ( 703 * weight ) / ( height ** 2 );
    }

    bmi = bmi.toFixed(1);

    let category = '';

    // - Underweight: BMI less than 18.5
    // - Healthy weight: BMI 18.5 to 24.9
    // - Overweight: BMI 25 to 29.9
    // - Obese: BMI 30 or greater

    if(bmi < 18.5 ) category = 'underweight';
    else if (bmi < 24.9) category = 'healthy weight';
    else if (bmi < 29.9) category = 'overweight';
    else category = 'obese';

    resultDisplay.innerHTML = `
    <div>
        <p>Your BMI is...</p>
        <h3 style="font-size: 48px;">${bmi}</h3>
    </div>
    <p>Your BMI suggests you’re a ${category}.</p>
    `

};

// Eventos para cambio de unidades

metricRadio.addEventListener('change', () => {
    heightDisplay.textContent = 'cm';
    weightDisplay.textContent = 'kg';
    inputHeight.value = '';
    inputWeight.value = '';
    resultDisplay.innerHTML =  `<h3>Welcome!</h3><p>Enter your height and weight and you’ll see your BMI result here</p>`;

})

imperialRadio.addEventListener('change', () => {
  heightDisplay.textContent = 'in';
  weightDisplay.textContent = 'lb';
  inputHeight.value = '';
  inputWeight.value = '';
  resultDisplay.innerHTML = `<h3>Welcome!</h3><p>Enter your height and weight and you’ll see your BMI result here</p>`;
});

// Eventos para recalcular BMI al ingresar datos

inputHeight.addEventListener('input', calculateBMI);
inputWeight.addEventListener('input', calculateBMI);