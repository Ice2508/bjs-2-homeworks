"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let root1;
  let root2;
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    root1 = -b / (2 * a);
    arr.push(root1);
  }

  if (d > 0) {
    root1 = (-b + Math.sqrt(d)) / (2 * a);
    root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent /= 1200;
  let principal = amount - contribution;
  let monthlyPayment = principal * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let totalPayment = +(monthlyPayment * countMonths).toFixed(2);
  return totalPayment;
}
