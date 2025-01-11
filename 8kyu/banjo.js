function areYouPlayingBanjo(name) {
  const firstLetter = name[0];

  if (firstLetter !== 'R' && firstLetter !== 'r') {
    return `${name} does not play banjo`;
  }
  return `${name} plays banjo`;
}

console.log(areYouPlayingBanjo('Rizal'));
