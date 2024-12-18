"use strict"


function parseCount(dataToParse) {
  let res = Number.parseFloat(dataToParse);
  if (Number.isNaN(res)) {
    throw new Error('Невалидное значение');
  }
  return res;
}

function validateCount(dataToParse) {
  try {
    return parseCount(dataToParse);
  } catch (error) {
    return (error);
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    let halfPerimeter = 0.5 * (this.a + this.b + this.c);
    return +Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}