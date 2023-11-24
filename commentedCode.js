/*'use strict';
let hasDriversLicense = false;
const passTest = true;

if(passTest){
    hasDriversLicense = true;
}
if(hasDriversLicense){
    console.log("I can drive : D")
}

// const interface = 'Audio';
// const private = 534;

*/
/*function logger(){
    console.log('My name is Manish');
}

logger();
logger();
logger();


function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);*/

// Function Declaration
/*const age1 =  calcAge1(1991);
function calcAge1(birthYear){
   return 2037-birthYear;
}

//Fuction Expression
const age2 = calcAge2(1991);
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
console.log(age1, age2);*/
/*
//Fuction Expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

//Arrow Function 
const calcAge3 = birthYear => 2037-birthYear;
console.log(calcAge3(1991));

const yearUntilRetirement =  (birthYear, firstName) => {
    const age = 2037 -birthYear;
    const retirement =  65-age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, "Manish"));
console.log(yearUntilRetirement(1980, "Shaurya"));
*/
/*
function cutFriutPieces (fruit){
    return fruit * 4
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFriutPieces(apples);
    const orangePieces = cutFriutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(2,3));*/

/*const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const yearUntilRetirement =  function (birthYear, firstName){
    const age =  calcAge (birthYear);
    const retirement =  65-age;

    if(retirement > 0 ){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired 🎉`);
        return -1;

    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, "Manish"));
console.log(yearUntilRetirement(1970, "Mike"));
*/
/*const calcAverage = (scores1, scores2, scores3) => (scores1 + scores2 +scores3)/3;
console.log(calcAverage(1,2,3));

let scoreDolphins =  calcAverage (44,23,71);
let scoreKoalas = calcAverage (65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas){
    // calcAverage
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log('No teams win... ')
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

scoreDolphins =  calcAverage (85,54,41);
scoreKoalas = calcAverage (23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);*/

/*const friends = ['Rohit', 'Virat', 'Shubham', 'Rahul'];
console.log(friends);

const yy = new Array(1920, 2002, 2020);
console.log(yy);

console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length-1]);

friends[2] = "Shaurya";

console.log(friends);

const firstName = "Manish";
const manish = [firstName, "Bagul", 2023-1984, 'Front End Developer', friends];

console.log(manish);
console.log(manish.length);


const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));

const age1 = calcAge (years[0]);
const age2 = calcAge (years[1]);
const age3 = calcAge (years[2]);
const age4 = calcAge (years[years.length-1]);

console.log(age1,age2,age3,age4);

const ages= [calcAge (years[0]), calcAge (years[1]), calcAge(years[years.length-1])];

console.log(ages);*/
/*
const friends = ["Michael", "Steven", "Peter"];

//Add Elements
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);
    
friends.unshift('John');
console.log(friends);

//Remove Elements

friends.pop();//last
const pooped = friends.pop();//last
console.log(pooped);

console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven')); 

friends.push(23);

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}*/

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }
/*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(bills, tips, totals);

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven']
];
*/
/*
const jons ={
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037-1991,
    job : 'Teacher',
    friends : ['Michael', 'Peter', 'Steven']
};

console.log(jons);
console.log(jons.lastName);
console.log(jons['lastName']);

const nameKey ='Name';

console.log(jons['first' + nameKey]);
console.log(jons['last' + nameKey]);


// const interestedIn = prompt('What do you want to know about Jonas? Choose between Firstname, Lastname, Age, Job and Friends');
// if(jons[interestedIn]){
//     console.log(jons[interestedIn]);
// }else{
//     console.log('Wrong Request! Choose between Firstname, Lastname, Age, Job and Friends');
// }

jons.location = 'Portugal';
jons['twitter'] = '@jonasschmedtman'

console.log(jons);
// console.log(jons['friends'][0]);

//challege
//"Jonas has 3 friends, and his best friends is called Michael" 
console.log(`${jons.firstName}, has ${jons.friends.length}, and his best friends is called ${jons.friends[0]}`);*/
/*
const jonas = {
    firstName: 'Jonas',
    lastName : 'Schmedtmann',
    birthYear : 1991,
    job:'Teacher',
    hasDriverLicense: true,
    calAge: function(birthYear){
        return 2037- birthYear;
    }
}

console.log(jonas.calAge(1991));
console.log(jonas['calAge'](1991));*/
/*
const jonas = {
    firstName: 'Jonas',
    lastName : 'Schmedtmann',
    birthYear : 1991,
    job:'Teacher',
    hasDriverLicense: true,
    calAge: function(){
        // console.log(this);
        return 2037- this.birthYear;
    }
}

console.log(jonas.calAge());
console.log(jonas.calAge());
console.log(jonas.calAge());
console.log(jonas.calAge());*/
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    hasDriverLicense: true,
    calAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calAge()}-years old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'}, driver's license`;
    }
}
console.log(jonas.calAge());

console.log(jonas.age);

//Challege

//"Jonas is a 46-years old teacher, and he has drive's license "

// if(jonas.hasDriverLicense){
//     console.log(`${jonas.firstName} is a ${jonas.age}-years old ${jonas.job} and he has drive's license`);
// }else{
//     console.log(`${jonas.firstName} is a ${jonas.age}-years old ${jonas.job} and he hasn't drive's license`);
// }

console.log(jonas.getSummary());*/
/*
const mark = {
    fullName : "Mark Miller",
    mass:78,
    height:1.69,
    
    calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height);
    }
};
 const john = {
     fullName : "John Smith",
     mass : 92,
     height : 1.95,
     
     calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height);
    }
 }
 if(john.calcBMI () > mark.calcBMI()){
     console.log(`${john.fullName}'s is BMI ( ${john.bmi} ) is higher than ${mark.fullName}'s (${mark.bmi})!`);
 }else{
      console.log(`${john.fullName}'s is BMI ( ${john.bmi} ) is less than ${mark.fullName}'s (${mark.bmi})!`)
 }*/

/*for (let rep=1; rep<=10; rep++){
   console.log(`Lifting weights repitation ${rep}`);
}*/
/*
 const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for(let i=0;i<jonasArray.length;i++){
    //Reading from jonasArray 
    console.log(jonasArray[i], typeof(jonasArray[i]));

    //Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years =[1991, 2007, 1969, 2020];

const ages =[];

for(let i=0; i<years.length; i++){
    ages.push(2037-years[i]);
}
console.log(ages);

// continue and break
console.log(' ----ONLY STRINGS --- ');
for(let i=0;i<jonasArray.length;i++){
    if(typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof(jonasArray[i]));
}

console.log(' ----BREAK WITH NUMBER --- ');
for(let i=0;i<jonasArray.length;i++){
    if(typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof(jonasArray[i]));
}*/
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven']
];

for(let i=jonas.length-1; i>=0; i--){
    console.log(jonas[i]);
}

for(let exercise=1; exercise < 4 ; exercise++){
    console.log(`---------Start excercise ${exercise}---------`);
    for(let rep =1; rep < 6 ; rep++){
        console.log(`Exercise ${exercise} : Lifting weights repitation ${rep} 🏋️`);
    }
}*/

//  for (let rep=1; rep<=10; rep++){
//     console.log(`Lifting weights repitation ${rep}🏋️`);
//  }

/*let rep=1;
while(rep<=10){
   console.log(`WHILE: Lifting weights repitation ${rep}🏋️`);
   rep++;
}
 
let dice = Math.trunc(Math.random()*6) +  1;
console.log(dice);

while(dice !== 6){
   console.log(`Dice rolled out ${dice}`);
   dice=Math.trunc(Math.random()*6)+1;
}*/
/*
 const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
 const tips =[];
 const totals =[];
 

 const calcTip = function(bill){
  return bill >50 && bill<=300 ?bill*0.15 :bill*0.20;  
 }
 for(let i=0; i<bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
 }
 //return bill > 50 && bill <= 300 ? bill*0.15 : bill*0.20; 

console.log(bills, tips, totals);

const calcAverage = function(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));*/
/*
'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // orderDelivery : function({starterIndex, mainIndex, time, address}){  
    //     console.log(starterIndex, mainIndex, time,address);
    //     console.log(`Order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    // }
    orderDelivery : function({starterIndex=0, mainIndex=1, time='20:00', address}){  
        // console.log(starterIndex, mainIndex, time,address);
        console.log(`Order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }

};

restaurant.orderDelivery({
    time:'23:30',
    address:'Via del sole, 21',
    mainIndex:2,
    starterIndex:2
});
restaurant.orderDelivery({
    address:'Via del sole, 21',
    starterIndex:1
});


//Destructuring Objects 
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);


const { name: restaurantName, categories: tags, openingHours: hours } = restaurant;
console.log(restaurantName, tags, hours);

const {menu =[], starterMenu:starter} = restaurant;
// const {menu, starterMenu:starter} = restaurant; //undefine
console.log(menu,starter);
console.log(openingHours);
const {fri:{open, close}} = openingHours;
console.log(open, close);

*/


/*
const arr = [2,3,4];
const [a,b,c] = arr;
console.log(a,b,c);
console.log(arr);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// console.log(temp);
// main = secondary;
// secondary =temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

const nested= [2, 4, [5,6]];
const [i, , [j,k]] = nested;

console.log(i, j, k);

const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);*/

