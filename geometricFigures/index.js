// square
function perimeterSquare(sideSquare){
    let perimeter = sideSquare * 4;
    return console.log("El perimetro del cuadrado es: " + perimeter + " cm");
}

function areaSquare(sideSquare){
     let area = sideSquare * sideSquare;
     return console.log("El area del cuadrado es: " + area + " cm²");
}

// triangle
function perimeterTriangle(sideOne, sideTwo, sideThree){
    let perimeter = sideOne + sideTwo + sideThree;
    return console.log(`El perimetro del triangulo es: ${perimeter} cm`);
}

function areaTriangle(sideOne, sideTwo, sideThree){
    let semiPerimeter = (sideOne + sideTwo + sideThree)/2;
    let areaTriangle = Math.sqrt((semiPerimeter)*(semiPerimeter-sideOne)*(semiPerimeter-sideTwo)*((semiPerimeter-sideThree))); // formula de heron para el area de un triangulo conociendo todos sus lados
    return console.log(`El area del triangulo es: ${Math.round(areaTriangle)} cm²`); 
}

// circle
function perimeterCircle(radio){
    let diameter = radio * 2;
    let perimeterCircle = Math.PI * diameter;
    return console.log(`El perimetro del circulo es: ${Math.round(perimeterCircle)} cm`);
}

function areaCircle(radio){
    let areaCircle = Math.PI * radio**2;
    return console.log(`El area del circulo es: ${Math.round(areaCircle)} cm²`);
}