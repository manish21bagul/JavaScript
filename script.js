'use strict';
const openingHours= {
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
    },}
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

console.log('a+very+nice+string'.split('+'));
console.log('Manish Bagul'.split(' '));

const [firstName, lastName] = 'Manish Bagul'.split(' ');
const newName = (['Mr.', firstName, lastName.toUpperCase()].join(' '));

console.log(newName);

const capatalizName =function(name){
    const namesUpper = [];
    const names =name.split(' ');
    for(const n of names){
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '))
}
capatalizName('jessica ann smith davis');
capatalizName('manish bagul');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Manish'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
    //console.log(last);
    // return last.
}
console.log(maskCreditCard(12345678));
console.log(maskCreditCard('42340098593045534'));

//Repeat

const message2 = 'Bad weather... All Departures Delayed... ';

console.log(message2.repeat(5));

const planesInLine = function(n){
    console.log(`There are ${n} planes in lines ${'🛬'.repeat(n)}`)
}
planesInLine(5);
planesInLine(3);
planesInLine(12);

/*
/////////////////////////////////////////
//Working with Strings - part-2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

//Fix capatalization in name

const passanger = 'jOnAs'; // Jonas
const passangerLower = passanger.toLowerCase();
// console.log(passangerLower);
const passangerCorrect = passangerLower[0].toLocaleUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail  =  lowerEmail.trim();
console.log(trimmedEmail);

console.log('----- Another Way -------');
const normalizedEmail =  loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email ===  normalizedEmail);


//replacing

const priceGB = '288,97£';
const priceUS =  priceGB.replace('£', '$').replace(',' , '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
//console.log(announcement.replaceAll('door', 'gate'));
//console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));


//Booleans (String methods returns booleans)
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('boeing'));
console.log(plane.startsWith('Air'));
console.log('---- Latest -----');

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log('Part of the new Airbus family');
}

// Practice exercise 

const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('Your are NOT allowed on board');
    }else{
        console.log('Welcome aboard!');
    }
}
checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and gun for protection');



/*
/////////////////////////////////////////
//Working with Strings - part-1
const airline = 'TAP Air Portugal';

const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));//8
console.log(airline.indexOf('portugal')); // -1 beacuse not found 'portugal' case sensitive
console.log(airline.slice(4));// start from 4 index here T at 0, A at 1, P at 2, sapce at 3 , and a at 4 // output Air Portugal 
console.log(airline.slice(4,7)); // Air

console.log(airline.slice(0, airline.indexOf(' ')));//TAP
console.log(airline.slice(airline.lastIndexOf(' ')+1))//Portugal

console.log(airline.slice(-2));// al
console.log(airline.slice(1, -1));//AP Air Portuga

const checkMiddelSeat = function(seat){
    //B and E are middle seats
    const s = seat.slice(-1);
    if(s=== 'B' || s === 'E'){
        console.log('You got the middle seat 😊');
    }
    else{
        console.log('You got Lucky 😎');
    }

}

checkMiddelSeat('11B');
checkMiddelSeat('23C');
checkMiddelSeat('3E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));
/*
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct 🎉'],
    [false, 'Try Again!'],
]);
console.log(question);

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz App
console.log(`----------------- Quiz App --------------------`);
console.log(question.get('question'));
for(const [key, value] of question){
    if(typeof(key) === 'number'){
        console.log(`Answers : ${key}: ${value}`);
    }
}
//const answer = Number(prompt('Your answer'));
const answer =3;
// console.log(answer);

// question.get('correct') === answer ? console.log(question.get(true)) : console.log(question.get(false)); //solve by me
console.log(question.get(question.get('correct')=== answer));

//convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
//Map Fundamental

const rest =  new Map();
rest.set('name', 'Sai Prasad');
rest.set(1, 'Pornnima, Kalyan');
console.log(rest.set(2, 'Wagle Thane'));
rest.set('categories', ['Mango','Apple','Orange','Banana','Watermelon']).set('open', 11).set('close',23).set(true, 'we are open :D').set(false, 'We are closed: (');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time>rest.get('open') && time<rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1,2];
// rest.set([1,2], 'Test'); 
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size);
console.log(`---------- Current Output ----------`);
// console.log(rest.get([1,2]));//undefined
console.log(rest.get(arr));//

/*const orderSet = new Set([
    'Mango',
    'Apple',
    'Orange',
    'Banana',
    'Watermelon',
    'Grape',
    'Mango',
    'Apple'
]);
console.log(orderSet);
console.log(new Set('bagul'));
console.log(orderSet.size);
console.log(orderSet.has('Mango'));
console.log(orderSet.has('Chiku'));
orderSet.add('Pineapple');
orderSet.add('Pineapple');
orderSet.delete('Watermelon');
// orderSet.clear();
console.log(orderSet);

for(const order of orderSet){
    console.log(order);
}

const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef','waiter'];
const staffUnique =[...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['waiter', 'chef', 'manager', 'waiter', 'chef','waiter']));
console.log(new Set('manishbagul').size);
/*
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

