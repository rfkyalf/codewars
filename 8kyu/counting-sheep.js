// title Counting sheep...
// url https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(sheep) {
  const arr = sheep;
  const filteredArray = arr.filter((a) => a === true);

  return filteredArray.length;
}

console.log(countSheeps([true, false, null, undefined]));
