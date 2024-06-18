const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let Array = [];
let Target;



//This function checks if the sub array exist or doesnt exist and returns the final output
function Checker () {

    let found = false;          // Set it to false by default
    
    for (let p = 0; p < Array.length; p++) {
        let Sum = 0;
        for (let i = p; i < Array.length; i++) {
            Sum = Sum + Array[i];
            if (Sum === Target) {
                found = true;
                break;
            }
            else if (Sum > Target) {         // If Sum exceeds Target, breaks the inner loop cause rest elements will only increase the sum beyond Target
                break;
            }
        }

        if (found == true) {        // If it sums up to Target, no need to loop again
            break;
        }
    }

    console.log(found);

}



// Checks if the array contains elements between 1 and 100,000
function lengthCheck(){

    const min = 1;
    const max = 100000;



    if (Array.length > min && Array.length < max) {    // Checks if the array length is btn 1 and 100,000 as suggested
        Checker(); // This is the final condition to find the suba array
    } else {
        console.log("Please, enter elements in array which are between 1 and 100,000")
    }    
}



// This one asks to enter the array elements one by one. And it also loops by recursion where it is calling itself below
function collectInput(length, currentIndex) {
    if (currentIndex >= length) {   // This determines when to stop. When the current index is trying to exceed the array length
        lengthCheck();             // Now we got our elements in array, we call this to find if there is a sub array = Target
        rl.close();
        return;
    }
    
    
    rl.question(`Enter element ${currentIndex}: `, (input) => {
        let element = parseInt(input);
        Array.push(element); // Add the input to the array after converting it to a number
        collectInput(length, currentIndex + 1);
    });
}


// Basic questions. Asks Length of array and its Target sum
function startInputCollection() {
    rl.question('Enter length of array: ', (length) => {
        let len = parseInt(length);
        rl.question('Now enter the Target: ', (inputTarget) => {
            Target = parseInt(inputTarget);   // Convert it to an integer
            collectInput(len, 1);
        });
    });
}






startInputCollection();