function betterThanAverage(classPoints, yourPoints) {
  const totalPoints = classPoints.reduce((a, b) => a + b, 0);
  const average = totalPoints / classPoints.length;

  if (average > yourPoints) {
    return false;
  }

  return true;
}

console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));
