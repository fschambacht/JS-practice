// square
const sideSquare =5;
const perimeterSquare = sideSquare * 4;
const areaSquare = sideSquare * sideSquare;

console.group("Square's");
console.log("Los lados del cuadrado miden: " + sideSquare + " cm");
console.log("El perimetro del cuadrado es: " + perimeterSquare + " cm");
console.log("El area del cuadrado es: " + areaSquare + " cm²");
console.groupEnd();

// triangle
const sideOne = 6;
const sideTwo = 6;
const sideThree = 4;
const perimeterTriangle = sideOne + sideTwo + sideThree;
const semiPerimeter = perimeterTriangle/2;
const areaTriangle = Math.sqrt((semiPerimeter)*(semiPerimeter-sideOne)*(semiPerimeter-sideTwo)*((semiPerimeter-sideThree))); // formula de heron para el area de un triangulo conociendo todos sus lados

console.group("Triangle's");
console.log(`Los lados del triangulo miden: ${sideOne}, ${sideTwo} y ${sideThree} cm`);
console.log(`El perimetro del triangulo es: ${perimeterTriangle} cm`);
console.log(`El area del triangulo es: ${areaTriangle} cm²`);
console.groupEnd();

// circle

const radio = 4;
const diameter = radio * 2;
const perimeterCircle = Math.PI * diameter;
const areaCircle = Math.PI * radio**2;

console.group("Circle");
console.log(`El perimetro del circulo es: ${perimeterCircle} cm`);
console.log(`El area del circulo es: ${areaCircle} cm²`);
console.groupEnd();