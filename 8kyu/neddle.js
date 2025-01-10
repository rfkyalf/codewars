function findNeedle(haystack) {
  const found = haystack.indexOf('needle');
  return `found the needle at position ${found}`;
}

console.log(
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
);
