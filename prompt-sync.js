const prompt = require("prompt-sync")();

const age = parseInt(prompt("What is your age? "));
//const age = prompt("What is your age? ");

// console.log(`Depth = ${depth}`);

try {
    if (Number.isInteger(age))
    {
        console.log("Age = " + age)
    } else {
        return error
    }
} catch (error) {
    console.log("Please enter an integer value")
    console.log(age)
    console.log(Number.isInteger(age))
    return null
}

//var depth = 42;
    var day = 1;
    var distance = 0;

function main(){
    

    for (day = 1; distance < depth; day++)
    {
        distance += 7;
        if (distance >= depth)
        {
            break;
        } else {
            distance -= 2;
        }
    }
    console.log(`It will take ${day} days to get the hell outta here`);
}

//main();
