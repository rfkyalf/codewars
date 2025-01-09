// title Abbreviate a Two Word Name
// url https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/

function abbrevName(name) {
  const [firstName, lastName] = name.split(' ');

  const filter1 = firstName[0];
  const filter2 = lastName[0];

  const join = filter1 + '.' + filter2;

  return join.toUpperCase();
}

console.log(abbrevName('Udin Komarudin'));
