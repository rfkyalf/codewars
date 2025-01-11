function past(h, m, s) {
  if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
    return h * 3600000 + m * 60000 + s * 1000;
  }

  return;
}

console.log(past(0, 1, 1));
