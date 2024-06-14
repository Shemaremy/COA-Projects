const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// If divisible by 3, reverse the string
function three(Name) {
    let rev = Name.split('').reverse().join('');
    console.log(rev);
}


// If divisible by 5, change to ASCII
function Five(Name) {
    let ascii = [];

    for (let i = 0; i < Name.length; i++) {
        ascii.push(Name.charCodeAt(i));
    }

    console.log(ascii);

}


// If divisible by 3 and 5, perform all operations
function FiveandThree(Name) {
    let rev = Name.split('').reverse().join('');
    console.log("Reversed : " +rev);

    let ascii = [];

    for (let i = 0; i < Name.length; i++) {
        ascii.push(Name.charCodeAt(i));
    }

    console.log("ASCII Codes : " +ascii);

}


// Function to check first condition (Length of string)
function checkLength(Name) {
    if (len % 3 === 0 && len % 5 === 0) {
        FiveandThree(Name);
    } else if (len % 3 === 0) {
        three(Name);
    } else if (len % 5 === 0) {
        Five(Name);
    } else {
        console.log("The length of the string is neither divisible by 5 nor 3");
    }
    
}



rl.question('Enter your word : ', (Name) => {
    len = Name.length
    checkLength(Name);
    rl.close();
});