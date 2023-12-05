'use strict';
(function(){
    const header =document.querySelector('h1');
    header.style.color ='red';
    document.querySelector('body').addEventListener('click', function(){
        header.style.color ='blue';
    }
    );
})();


/*function returnFunc(){
const x = () => {
  let a = 1;
  console.log(a);
  const y = () => {
    let a = 2;
    console.log(a);
    const z = () => {
      let a = 3;
      console.log(a);
    };
    z();
  };
  y();
};
return x;
}
let a = returnFunc();
a();
// x();


/*
//Example 1
let f;

const g = function(){
    const a =23;
    f  = function(){
        console.log(a*2);
    }; 
};

const h = function(){
    const b=777;
    f= function(){
        console.log(b*2);
    };
};

g();
f();
console.dir(f);

//Re-assingning f function
h();
f();

console.dir(f);

//Example 2
const boardPassengers = function(n, wait){
    const perGroup = n/3;
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait* 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3);





/*const secureBooking =function(){
    let passengerCount = 0;
    return function(){
        passengerCount ++;
        console.log(`${passengerCount} passengers`)
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

/*const runOnce = function(){
    console.log('This will never run again');
}

runOnce();

(function(){
    console.log('This will never run again');
    const isPrivate =23;
})();

// console.log(isPrivate);

(()=>{console.log('This will ALSO never run again')})();

{
    const isPrivate =23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

/*
//coding challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
    question : 'What is your favourite programming language?',
    options : ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
    //This generate [0, 0, 0, 0]. More in the next section 😊
    answers : new Array (4).fill(0),
    registerNewAnswer(){
        //Get Answer
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        console.log(answer);

        //Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
       // console.log(this.answers);
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        }else if(type==='string'){
            //Poll results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(' ',)}`);
        }
    },
    
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

poll.displayResults.call({answers:[5, 2, 3]});
poll.displayResults.call({answers:[5, 2, 3]}, 'string');
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]});
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]}, 'string');




//poll.registerNewAnswer();
// poll.registerNewAnswer =function(){
//     // for(const i of this.options){
//     //     console.log(i);
//     // }
//    const answer = Number(prompt(`${this.question} \n ${this.options.join('\n')}\n(Write option number)`));

//     // const num = Number(userInput);
//     // for(let [key, value] of this.answers.entries()){
//     //     console.log(key);
//     //     if(key === num){
//     //         // value++;
//     //         console.log(value);
//     //     }
//     // }
//     // console.log(this.answers);
// }

// poll.registerNewAnswer(); 


/*
const lufthansa = {
    airline:'Lufthansa',
    iataCode:'LH',
    bookings:[],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name});
    },
};

lufthansa.book(239, 'Manish Bagul');
lufthansa.book(635, 'John Smith');


const eurowings = {
    airline:'Eruowings',
    iataCode:'LH',
    bookings:[],
}
const book = lufthansa.book;
// console.log(book());
//Does NOT work
// book(23, 'Sachin Tendulkar');

//Call method
book.call(eurowings, 23, 'Sachin Tendulkar');
console.log(eurowings);
// lufthansa.book(123, 'Virat Kholi');
// console.log(lufthansa);
book.call(lufthansa, 239, 'MS Dhoni');
console.log(lufthansa);

const swiss = {
    airline :'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
};

book.call(swiss, 583,  'Rohit Sharma');
console.log(swiss);

//Apply method
const flightData = [345, 'Jasprit Bumbra'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);



//Bind Method
// book.call(eurowings, 23, 'Sachin Tendulkar');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Ganesh Bhamare');

const bookEW23 = book.bind(eurowings, 678);
bookEW23('Prasad Joshi');
bookEW23('Kalpesh Patil');

//With event Listeners

lufthansa.planes =300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// function check(){
//     console.log("Hello");
// }
// const btnBuy = ;
// btnBuy
//lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application

const addTax = (rate, value ) => value + (value*rate / 100) ;
console.log(addTax(10 ,200));

const addVAT = addTax.bind(null, 23);
//addVAT = value => value + (value * 23/100);

console.log(addVAT(100));
console.log(addVAT(23));


// const addTax1 = function(rate){
//     return function(value){
//        console.log(value + (value*rate/100));
//     }
// }

const addTax1 = rate => value =>console.log(value*rate/100);
const addVAT1 =addTax1(23);
console.log('-----Latest------');
addVAT1(200);






/*
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Manish');
greeterHey('John');

greet('Hello')('Shaurya');

//Arrow function //Challenge
const greetNew = greeting => name => console.log(`${greeting} ${name}`);
greetNew('Good Morning')('Daksh');

/*
const oneWord= function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] =str.split(' ');
    return [first.toUpperCase(), ...others].join(' '); 
}

//Higher-order function

const transformer = function(str, fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed String : ${fn(str)}`);
    console.log(`Transformed by : ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
console.log(`---------------Latest------------------`);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('👋');
  };
  document.body.addEventListener('click', high5);
  ['jonas', 'Martha', 'Adam'].forEach(high5);







/*
const flight = 'LH234';
const manish = {
    name : 'Manish Bagul',
    passport : 213214235235,
};

const checkIn =function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name ='Mr. ' + passenger.name;

    if(passenger.passport === 213214235235){
        alert('Checked In');
    }else{
        alert('Wrong passport');
    }

};

// checkIn(flight, manish);
// console.log(flight);
// console.log(manish);

// const flightName = flight;
// const passenger = manish;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*10000000000000);
}

newPassport(manish);
checkIn(flight, manish);

/*
/////////////////////////////////////////
//Default Parameters
const bookings = [];
const createBooking = function(flightName, numPassengers=1, price=199 * numPassengers){
    //ES5 
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightName,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
console.log('-----Latest --------');
createBooking('LH123', undefined, 1000);

console.log(bookings);*/