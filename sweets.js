let pennies = 15;
let wrappers = 0;
let totalSweets = 0

function sweets() {
while (pennies > 0)
{
    totalSweets += pennies;
    wrappers += pennies;

    console.log(pennies)
    
    pennies = Math.floor(wrappers / 3);
    wrappers = wrappers %3;

};
};

sweets();



console.log(totalSweets);

// let money = 15;
// let Sweets = 0;
// let Wrappers =0;
// let sweetsBought = 0;

// while (money >= 3 || Wrappers >=3 ){
//     console.log("test")
//     sweetsBought = money + Math.floor(Wrappers/3);
//     Sweets = Sweets + sweetsBought;
//     Wrappers = sweetsBought;
//     money = 0;
// }

// console.log(Sweets)