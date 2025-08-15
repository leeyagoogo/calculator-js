function addNumbers(){
    var num1 = parseFloat(document.getElementById("txtNum1").value);
    var num2 = parseFloat(document.getElementById("txtNum2").value);
    var sum = num1 + num2;
    alert("Sum: "+sum);
}

function subtractNumbers(){
    var num1 = parseFloat(document.getElementById("txtNum1").value);
    var num2 = parseFloat(document.getElementById("txtNum2").value);
    var diff = num1 - num2;
    alert("Difference: "+diff);
}

function multiplyNumbers(){
    var num1 = parseFloat(document.getElementById("txtNum1").value);
    var num2 = parseFloat(document.getElementById("txtNum2").value);
    var prod = num1 * num2;
    alert("Product: "+prod);
}

function divideNumbers(){
    var num1 = parseFloat(document.getElementById("txtNum1").value);
    var num2 = parseFloat(document.getElementById("txtNum2").value);

    if(num2 == 0){
        alert("Error: You cannot divide if your divisor (num2) is zero (0)!")
    }

    else{
        var quo = num1 / num2;
        alert("Quotient: "+quo);
    }
}

function clearTextboxes(){
    document.getElementById("txtNum1").value = "";
    document.getElementById("txtNum2").value = "";
}