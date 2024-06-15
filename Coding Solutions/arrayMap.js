const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let Array = [];
let Target;
let sum = 0;





//This function checks if the sub array exist or doesnt exist and returns the final output
function Checker () {

    let found = false;
    
    for (let p = 0; p < Array.length; p++) {
        let Sum = 0;
        for (let i = p; i < Array.length; i++) {
            Sum += Array[i];
            if (Sum === Target) {
                found = true;
                break;
            }
            if (Sum > Target) {
                break;
            }
        }
        if (found) {
            break;
        }
    }

    console.log(found);

}



// Checks if the array contains elements between 1 and 100,000
function lengthCheck(){

    const min = 1;
    const max = 100000;



    if (Array.length > min && Array.length < max) {
        Checker();
    } else {
        console.log("Please, enter elements in array which are between 1 and 100,000")
    }    
}



// This one asks to enter the array elements one by one
function collectInput(length, currentIndex) {
    if (currentIndex > length) {
        lengthCheck();
        rl.close();
        return;
    }

    rl.question(`Enter element ${currentIndex}: `, (input) => {
        Array.push(parseInt(input)); // Add the input to the array after converting it to a number
        sum += parseInt(input); // Add the input to the sum
        collectInput(length, currentIndex + 1);
    });
}


// Basic questions. Asks Length of array and its Target sum
function startInputCollection() {
    rl.question('Enter length of array: ', (length) => {
        let len = parseInt(length);
        rl.question('Now enter the Target: ', (inputTarget) => {
            Target = parseInt(inputTarget);   // Convert it to an integer
            collectInput(parseInt(len, 1);
        });
    });
}






startInputCollection();



