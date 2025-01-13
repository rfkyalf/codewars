function getGrade(s1, s2, s3) {
  const arr = [s1, s2, s3];
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum / arr.length;

  if (avg >= 0 && avg < 60) {
    return 'F';
  } else if (avg >= 60 && avg < 70) {
    return 'D';
  } else if (avg >= 70 && avg < 80) {
    return 'C';
  } else if (avg >= 80 && avg < 90) {
    return 'B';
  } else if (avg >= 90 && avg <= 100) {
    return 'A';
  }

  return 'Invalid Input';
}

console.log(getGrade(95, 90, 93));
