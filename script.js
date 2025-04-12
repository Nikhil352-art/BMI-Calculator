window.onload = () => {
  const button = document.querySelector("#btn");
  button.addEventListener("click", calculateBmi);
}

function calculateBmi() {
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  // Check for valid height input
  if (isNaN(height) || height <= 0) {
      result.innerText = "Please enter a valid height in centimeters.";
      return;
  }

  // Check for valid weight input
  if (isNaN(weight) || weight <= 0) {
      result.innerText = "Please enter a valid weight in kilograms.";
      return;
  }

  // Calculate BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Determine BMI category
  if (bmi < 18.5) {
      result.innerText = `Underweight: ${bmi}`;
  } else if (bmi >= 18.5 && bmi < 25) {
      result.innerText = `Normal: ${bmi}`;
  } else if (bmi >= 25 && bmi < 30) {
      result.innerText = `Overweight: ${bmi}`;
  } else if (bmi >= 30 && bmi < 35) {
      result.innerText = `Obesity (Class I): ${bmi}`;
  } else if (bmi >= 35 && bmi < 40) {
      result.innerText = `Obesity (Class II): ${bmi}`;
  } else {
      result.innerText = `Extreme Obesity: ${bmi}`;
  }
}