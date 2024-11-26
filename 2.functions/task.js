"use strict"

function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = +(sum / arr.length).toFixed(2);
  return {
    min,
    max,
    avg
  }
}

function isArrayEmpty(arr) {
  return arr.length === 0;
}

function summElementsWorker(...arr) {
  if (isArrayEmpty(arr)) {
    return 0;
  }
  return arr.reduce((acc, value) => {
    return acc + value;
  }, 0);
}

function differenceMaxMinWorker(...arr) {
  if (isArrayEmpty(arr)) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (isArrayEmpty(arr)) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (isArrayEmpty(arr)) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return countEvenElement ? sumEvenElement / countEvenElement : 0;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (maxWorkerResult < result) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}