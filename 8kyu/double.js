function doubleChar(str) {
  return str
    .split('')
    .map((char) => char + char)
    .join('');
}
console.log(doubleChar('tes'));
