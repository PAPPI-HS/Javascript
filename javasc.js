'use strict;'

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//     [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//     },
// };



// let scored = {}
// const jonas = Object.values(game.scored);

// console.log(jonas.count)
// for (const x of Object.values(game.scored) ){
//     let a = jonas.count(x);
//     scored[x] = a;

//}

// scored['hassan']++;
// console.log(scored)


//const players = Object.entries(game.scored);
//console.log(typeof players[0][0]);


// for (const [goal,player] of game.scored.entries()){
//      console.log(`Goal ${goal+1} : ${player}`)
// }

// const odd = Object.values(game.odds);
// // console.log(odd);

// let sum = 0;
// let average=0;

// for (const a of odd){
//     sum += a;
// }

// average = sum/odd.length;
// console.log(average);

// for(let [name,od] of Object.entries(game.odds)) {
//     name === 'x' ? console.log(`odds of draw:${od}`):console.log(`odds of victory ${game[name]}:${od}`)
// }
//for (const [a,b] of game.odds.entries())




// console.log(scorers)

//const {team1:a,x:b,team2:c} = game.odds ;
//console.log((a+b+c)/3)

// var a = ['a', 'b', 'c'];
// var iterator = a.entries();

// for (let [a,b] of iterator) {
//   console.log(a,b);
// }
// [0, 'a']
// [1, 'b']
// [2, 'c']

// const my_map = new Map() ;

// my_map.set(true,'kk').set(false,'no kk')

// console.log(my_map)

// const resturant = { name:'Calssico Italiano',location:'via angelo tavsnti 23', mainMenu :['pizza','pasta','Risotto'], Time:{fri:{open:12, close:3}}};

// const{Time:{fri:{open,close}}} = resturant;
// console.log(open,close)


// const my_map = new Map([[1,"infetuation"]] );
//  my_map.set(3,"crush").set(2,"love")
//  console.log(my_map)

const quiz = new Map([
    ["question","what is best programming language in the world?"],
    [1,'c'],
    [2,'java'],
    [3,'javaScript'],
    ["correct",3],
    [true,"correct"],
    [false,"Try again!"],
]);

console.log(quiz.get("question"))
for (const [key,value] of quiz){
    if (typeof key === "number"){
        console.log(`Answer ${key} : ${value}`)
    }
}    

let ans = Number(prompt("your answer ?"))

let a = ans === quiz.get("correct") ? quiz.get(true) : quiz.get(false);

console.log(a);