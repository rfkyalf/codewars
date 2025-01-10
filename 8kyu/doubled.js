function maps(x) {
  const doubled = [...x];

  return doubled.map((num) => num * 2);
}

console.log(maps([1, 2, 3]));
