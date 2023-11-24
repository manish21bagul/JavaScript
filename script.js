'use strict'; 
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours 
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //ES6 enchanced object literals 
    openingHours,
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({ starterIndex = 0, mainIndex = 1, time = '20:00', address }) {
        console.log(`Order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orederPizza(ingredient, ...otherIngredients) {
        console.log(ingredient);
        console.log(otherIngredients);
    }
};

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
    openStr += `${day},`;
}
console.log(openStr);

//property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object 
const entries = Object.entries(openingHours);
//console.log(entries);
//[key, value]
for(const [day, {open, close}] of entries){
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/* 
if(restaurant.hours && restaurant.hours.mon) 
console.log(restaurant.hours.mon.open); 
//restaurant.hours.fri && console.log(restaurant.hours.fri.open); 
//WITH optional chaining  
//console.log(restaurant.hours.mon.open); //Uncaught TypeError: Cannot read properties of undefined (reading 'open') 
console.log(restaurant.hours.mon?.open); 
console.log(restaurant.hours?.mon?.open); 
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ]; 
for(const day of days ) { 
    console.log(day); 
    const open = restaurant.hours[day]?.open ?? 'closed'; 
    console.log(`on ${day}, we open at ${open}`); 
} 
//Methods 
console.log(restaurant.order?.(0,1) ?? 'Method does not exits'); 
console.log(restaurant.orderRisatto?.(0,1) ?? 'Method does not exits'); 
//Arrays 
 const users = []; 
// const users = [ 
//     {userName : 'Manish', email : 'test@gmail.com'} 
// ]; 
//ES6 Way 
console.log('-------ES6----------'); 
console.log(users[0]?.userName ?? 'User array empty'); 
//Traditional way 
console.log('-------Traditional----------') 
if (users.length > 0) { 
    console.log(users[0].userName); 
} 
else { console.log('user array empty'); } 
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for(const item of menu) console.log(item);
for (const item of menu.entries()){
    console.log(item);
}
//console.log([...menu.entries()]);
for(const item of menu.entries()){
    console.log(`${item[0]+1}: ${item[1]}`);
}
console.log('-------Morden Way -------')
//Modern way wrritting this loop using destructuring
for(const [i, el] of menu.entries()){
    console.log(`${i + 1} : ${el}`);
}
/*
const rest1 = {
    name :'Barbeque Nation',
    numGuests : 20
}
const rest2 = {
    name :'The Legend Restaurant',
    owner : 'John Smith'
}
//OR assignment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);
/*
restaurant.numGuests =0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);//10
//Null : null and undefined (NOT 0 or ' ')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);//0
/*

console.log('------OR-------');
console.log(3 || 'jonas');//3
console.log('' || 'jonas');//Jonas
console.log(true || 0);//true
console.log(undefined || null);//null
console.log(undefined || 0 || '' || 'Hello' || 23 || null);// Hello
// console.log()
restaurant.numGuests =0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);


console.log('------AND-------');
console.log(0 && 'jonas'); // 0
console.log(7 && 'manish'); // manish
console.log('Hello' && 23 && null && 'manish')//null

//practical example
if(restaurant.orederPizza){
    restaurant.orederPizza('mashrooms', 'spinach');
}


/*
//1)Destructuring 

//SPREAD, because on the RIGHT side of =
const arr = [1,2, ...[3,4]];
console.log(arr); 

//REST, because on the LEFT side of =
const [a, b, ...others] = [1,2,3,4,5];
console.log(a,b,others);

const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFoods);

//Objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays); 

//2)Functions

const add = function(...numbers){
    let sum= 0;
    for(let i = 0; i< numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
}

add(2, 3, 5);
add(2, 4, 5, 6, 9, 7);
add(2, 5, 3, 7, 1, 8);

const x =[23,5,7];
add(...x);


restaurant.orederPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orederPizza('mushroom');
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log("Copy Array: " + mainMenuCopy);

//join array
// const arr1 = [1,2,3];
// const arr2 =[4,5,6];
// const joinArray = [...arr1, ...arr2];
// console.log(joinArray);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables : arrays, strings, maps, sets, NOT objects

const str = 'jonas';
const letters = [...str, ' ', '.S'];
console.log(letters);
console.log(...str);

//console.log(`${...str} Bagul`);
//Real world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);//es6 modern language

//Object
const newRestaurant = {founderIn: '1998', ...restaurant, founder:'Guiseppe'};
console.log(newRestaurant);

const copyRestaurant = {...restaurant};
copyRestaurant.name = "Sai Prasad";
console.log(copyRestaurant.name);
console.log(restaurant.name);*/

