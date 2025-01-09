// title Dollars and Cents
// url https://www.codewars.com/kata/55902c5eaa8069a5b4000083

function formatMoney(amount) {
  return amount
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    .replaceAll(',', '');
}

console.log(formatMoney(50));
