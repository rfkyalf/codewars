function bmi(weight, height) {
  return weight / height ** 2 <= 18.5
    ? 'Underweight'
    : weight / height ** 2 > 18.5 && weight / height ** 2 <= 25
    ? 'Normal'
    : weight / height ** 2 > 25 && weight / height ** 2 <= 30
    ? 'Overweight'
    : 'Obese';
}

console.log(bmi(50, 1.8));
