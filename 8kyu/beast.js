function feast(beast, dish) {
  const arrB = beast.slice('');
  const bFirstLast = [arrB[0], arrB[arrB.length - 1]].join('');

  const arrD = dish.slice('');
  const dFirstLast = [arrD[0], arrD[arrD.length - 1]].join('');

  return bFirstLast === dFirstLast;
}

console.log(feast('great blue heron', 'garlic naan'));
