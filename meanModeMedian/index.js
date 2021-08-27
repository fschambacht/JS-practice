function toArray(){
    numbers = (document.getElementById("inputData").value).split(",");
    return numbers.map((n)=> parseInt(n));
}

function mean(){
    numbers = toArray();
    let sum = 0;
    for (const value of numbers) {
        sum += value;
    }
    const mean = sum / numbers.length;
    return document.getElementById("outputResult").innerHTML = mean;
}

function median(){
    numbers = toArray();
    numbers.sort(function(a, b){return a - b});
    let mean;
    let mid = Math.round(numbers.length / 2);
    if (numbers.length % 2 === 0) {
        mean = (numbers[mid] + numbers[mid - 1]) / 2;
    } else {
        mean = numbers[mid-1];
    }
    return document.getElementById("outputResult").innerHTML = mean;
}

function mode(){
    numbers = toArray();
    let object = [];
    
    numbers.forEach(element => {
        object.push(numbers.filter( (n) => n === element));
    });
    
    return document.getElementById("outputResult").innerHTML = object[object.length-1][0];
}
