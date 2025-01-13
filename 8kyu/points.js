function points(games) {
  return games.reduce((point, match) => {
    const [x, y] = match.split(':').map(Number);
    return point + (x > y ? 3 : x === y ? 1 : 0);
  }, 0);
}

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
);
