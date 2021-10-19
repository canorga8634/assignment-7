/*eslint-env browser*/
/*jslint browser: true */
/*global window */

//STEP 1
function halfNumber(num) {
    "use strict";
    num = 5;
    var dividedNumber = num / 2;
    window.document.write("Half of " + num + " is " + dividedNumber + ".<br>");
    return dividedNumber;
}
halfNumber();

//STEP 2
function squareNumber(num) {
    "use strict";
    num = 3;
    var squaredNumber = Math.pow(num, 2);
    window.document.write("The result of squaring the number " + num + " is " + squaredNumber + ".<br>");
    return squaredNumber;
}
squareNumber();

//STEP 3
function percentOf(x, y) {
    "use strict";
    x = 2;
    y = 4;
    var percent = (x / y * 100);
    window.document.write(x + " is " + percent + "% of " + y + ".<br>");
    return percent;
}
percentOf();
//STEP 4
function findModulus(x, y) {
    "use strict";
    x = 4;
    y = 10;
    var modulus = (y % x);
    window.document.write(modulus + " is the modulus of " + x + " and " + y + ".<br>");
    return modulus;
}
findModulus();

/*NOT FINISHED*/
//STEP 5
/*
var i;
var input;

function numbers() {
    "use strict";
    var total = 0;
    var sum;

    for (i = 0; i < input.length; i += 1) {
        input = values[0].use.split(',');
        input = window.prompt("Enter your numbers seperated by commas '9,18,21,34':");
    }
    sum = values.reduce(function (a, b) {
        return a + b;
    }, 0);
    total += sum;
    return total;
}
numbers();*/

/*var i;
var sum;
var total;
function numbers() {
    "use strict";
    var values = input[0].use.split(',');
    var input = window.prompt("Enter your numbers seperated by commas '9,18,21,34':");
    sum = values.reduce(function (a, b) {
        return a + b;
    }, 0);
    total += sum;
    window.document.write(total);
}
numbers();

*/
var i;
var input = new Array(window.prompt("Enter your numbers").use.split(','));
var realInput;

window.document.write(input);






