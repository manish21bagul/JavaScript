const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  //1.
  console.log('-----------01--------------');
  const scored =  game.scored;

// This traditional way I did 
//   for(const score of scored.entries()){
//     console.log(`Goal ${score[0]+1}: ${score[1]} `);
//   }
  //ES6 Style
  for(const [i, player] of scored.entries()){
    console.log(`Goal ${i + 1}: ${player}`);
  }

  //2.
  console.log('-----------02--------------');
  const oddsValues = Object.values(game.odds);
  let sum = 0;
  for(const i of oddsValues){
    sum += i;
  }
  console.log(`Average Odds: ${sum/oddsValues.length}`);
 // console.log(oddsValues);

 
  //3.
  console.log('-----------03--------------');
  const entries = Object.entries(game.odds);
  for(const [team, odd] of entries){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
    // console.log(team, odd);
  }

  //4.
  // BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element

const arr = game.scored;
const scorers = {};
console.log(arr);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
    if(scorers[arr[i]]){
        scorers[arr[i]]++;
    }
    else {
        scorers[arr[i]] =1;
    }
}

const firstName = 'Manish';

scorers [firstName] = 'Bagul';
console.log(scorers);

// for (const player of game.scored) {
    
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }


//  
//   console.log(scorers);
  
    // const test = [...oddsValues];
    // console.log(``);
//for(const [team, {}])

    //console.log(entries);
//[key, value]
// for(const [day, {open, close}] of entries){
//     console.log(`On ${day} we open at ${open} and close at ${close}`);
// }