/*eslint-env browser*/
/*jslint browser: true */
/*global window */

function display_menu() {
    "use strict";
    window.console.log("Weelcome to the Product Inventory Management System ");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update inventory (quantity)");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function display(inventory) {
    "use strict";
    inventory.forEach(function (product) {
        window.console.log(product[0]);
    });
    window.console.log("");
    inventory.forEach(function (product) {
        window.console.log(product[1]);
    });
    window.console.log("");
    inventory.forEach(function (product) {
        window.console.log(product[2]);
    });
    window.console.log("");
    inventory.forEach(function (product) {
        window.console.log(product[3]);
    });
    window.console.log("");
    inventory.forEach(function (product) {
        window.console.log(product[4]);
    });
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var enterSku = window.prompt("Enter the products SKU number:");
    if (enterSku === "4824") {
        inventory.forEach(function (product) {
            window.console.log(product[0]);
        });
    } else if (enterSku === "6343") {
        inventory.forEach(function (product) {
            window.console.log(product[1]);
        });
    } else if (enterSku === "3223") {
        inventory.forEach(function (product) {
            window.console.log(product[2]);
        });
    } else if (enterSku === "2233") {
        inventory.forEach(function (product) {
            window.console.log(product[3]);
        });
    } else if (enterSku === "9382") {
        inventory.forEach(function (product) {
            window.console.log(product[4]);
        });
    } else {
        window.console.log("Invalid SKU number!");
    }

    var updateQuantity = window.prompt("Enter the products new quantity");
    inventory.push(updateQuantity);
    window.console.log(updateQuantity + " was added.");
    window.console.log("");
}

function main() {
    "use strict";
    var inventory, command;

    display_menu();

    inventory = new Array();
    inventory[0] = ["Shirt", "Jeans", "Socks", "Hat", "Jacket"];
    inventory[1] = [4824, 6343, 3223, 2233, 9382];
    inventory[3] = [10, 22, 36, 12, 5];
    inventory[4] = [15.99, 39.99, 9.99, 14.99, 49.99];



    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();