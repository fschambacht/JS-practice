function priceDiscount(){
    const discount = document.getElementById("discount").valueAsNumber;
    const price = document.getElementById("price").valueAsNumber;
    const totalDiscount = 1 - (discount/100);
    const priceDiscount = totalDiscount * price;
    return document.getElementById("output").innerHTML = `The final price with discount is: ${priceDiscount}`;
}

function priceCoupon(){
    const coupon = document.getElementById("coupon").value;
    switch(coupon){
        case "DES10":
            discount = 10;
            break;
        case "DES30":
            discount = 30;
            break;
        case "DES50":
            discount = 50;
            break;
        default:
            discount = 0;
            break;
    }
    const price = document.getElementById("price").valueAsNumber;
    const totalDiscount = 1 - (discount/100);
    const priceDiscount = totalDiscount * price;
    return document.getElementById("output").innerHTML = `The final price with discount is: ${priceDiscount}`;
}