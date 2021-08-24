// square
function perimeterSquare(){
    let sideSquare = document.getElementById("sideSquare").valueAsNumber;
    let perimeter = sideSquare * 4;
    return alert("El perimetro del cuadrado es: " + perimeter + " cm");
}

function areaSquare(){
    let sideSquare = document.getElementById("sideSquare").valueAsNumber;
    let area = sideSquare * sideSquare;
    return alert("El area del cuadrado es: " + area + " cm²");
}

// triangle
function perimeterTriangle(){
    let sideOne = document.getElementById("sideOne").valueAsNumber;
    let sideTwo = document.getElementById("sideTwo").valueAsNumber;
    let sideThree = document.getElementById("sideThree").valueAsNumber;
    let perimeter = sideOne + sideTwo + sideThree;
    return alert("El perimetro del triangulo es: " + perimeter + " cm");
}

function areaTriangle(){
    let sideOne = document.getElementById("sideOne").valueAsNumber;
    let sideTwo = document.getElementById("sideTwo").valueAsNumber;
    let sideThree = document.getElementById("sideThree").valueAsNumber;
    let semiPerimeter = (sideOne + sideTwo + sideThree)/2;
    let areaTriangle = Math.sqrt((semiPerimeter)*(semiPerimeter-sideOne)*(semiPerimeter-sideTwo)*((semiPerimeter-sideThree))); // formula de heron para el area de un triangulo conociendo todos sus lados
    return alert(`El area del triangulo es: ${Math.round(areaTriangle)} cm²`); 
}

// circle
function perimeterCircle(){
    let radio = document.getElementById("radioCircle").valueAsNumber;
    let diameter = radio * 2;
    let perimeterCircle = Math.PI * diameter;
    return alert(`El perimetro del circulo es: ${Math.round(perimeterCircle)} cm`);
}

function areaCircle(){
    let radio = document.getElementById("radioCircle").valueAsNumber;
    let areaCircle = Math.PI * radio**2;
    return alert(`El area del circulo es: ${Math.round(areaCircle)} cm²`);
}