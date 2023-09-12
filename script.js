const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value); 
  const weight = parseInt(document.querySelector('#weight').value); 
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give height in cm`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give weight in kg`;
  } else {

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi <= 18.6 ){
        results.innerHTML = `Under Weight : BMI- ${bmi}`;
    }
    else if(bmi > 18.6 && bmi <= 24.9){
        results.innerHTML = `Normal Weight : BMI- ${bmi}`;
    }
    else {
        results.innerHTML = `Over Weight : BMI- ${bmi}`;
    }
    // results.innerHTML = `${bmi}`;

  }
});
