// square
function perimeterSquare(){
    let sideSquare = document.getElementById("sideSquare").valueAsNumber;
    let perimeter = sideSquare * 4;
    return document.getElementById("result-square").innerHTML= `The perimeter of square is: ${perimeter} cm`;
}

function areaSquare(){
    let sideSquare = document.getElementById("sideSquare").valueAsNumber;
    let area = sideSquare * sideSquare;
    return document.getElementById("result-square").innerHTML= `The area of square is: ${area} cm²`;
}

// triangle
function perimeterTriangle(){
    let sideOne = document.getElementById("sideOne").valueAsNumber;
    let sideTwo = document.getElementById("sideTwo").valueAsNumber;
    let sideThree = document.getElementById("sideThree").valueAsNumber;
    let perimeter = sideOne + sideTwo + sideThree;
    return document.getElementById("result-triangle").innerHTML= `The perimeter of the triangle is: ${perimeter} cm`;
}

function areaTriangle(){
    let sideOne = document.getElementById("sideOne").valueAsNumber;
    let sideTwo = document.getElementById("sideTwo").valueAsNumber;
    let sideThree = document.getElementById("sideThree").valueAsNumber;
    let semiPerimeter = (sideOne + sideTwo + sideThree)/2;
    let areaTriangle = Math.round(Math.sqrt((semiPerimeter)*(semiPerimeter-sideOne)*(semiPerimeter-sideTwo)*((semiPerimeter-sideThree)))); // formula de heron para el area de un triangulo conociendo todos sus lados
    return document.getElementById("result-triangle").innerHTML= `The area of triangle is: ${areaTriangle} cm²`;
}

// circle
function perimeterCircle(){
    let radio = document.getElementById("radioCircle").valueAsNumber;
    let diameter = radio * 2;
    let perimeterCircle = Math.round(Math.PI * diameter);
    return document.getElementById("result-circle").innerHTML= `The perimeter of circle is: ${perimeterCircle} cm`;
}

function areaCircle(){
    let radio = document.getElementById("radioCircle").valueAsNumber;
    let areaCircle = Math.round(Math.PI * radio**2);
    return document.getElementById("result-circle").innerHTML= `The area of circle is: ${areaCircle} cm²`;
}