'use strict';

var userName, howTall, bornInWA, hateRain, seahawksFan, seattleResidence, onlyChild, favoriteFoodAndDrink = ['pizza', 'coffee', 'beer', 'steak', 'mac and cheese', 'fish and chips'], guesses = 3;

// userName = prompt('Hi, my name is Vince. What\'s yours?');
// console.log('userName', userName);

// alert('I have some questions for you, ' + userName + '.');

// howTall = prompt('First, how tall am I (in inches)?');
// console.log('howTall', howTall);

// if (howTall < 76) {
//   alert('I am not that short.');
// } else if (howTall === '76') {
//   alert('Correct!');
// } else {
//   alert('Whoa, I\'m not that tall!');
// }

// if (howTall !== '76') {
//   for (var i = 0; i < guesses; i++) {
//     howTall = prompt('Try again!');
//     if (howTall < 76) {
//       alert('I am not that short.');
//     } else if (howTall === '76') {
//       alert('Correct!');
//       break;
//     } else {
//       alert('Whoa, I\'m not that tall!');
//     }
//   }
// }

// alert('The following questions require a response of y/n or yes/no.');

// bornInWA = prompt('Was I born in Washington State?').toUpperCase();
// console.log('bornInWA', bornInWA);
// if (bornInWA === 'Y' || bornInWA === 'YES') {
//   alert('That\'s right!');
// }
// else if (bornInWA === 'N' || bornInWA === 'NO') {
//   alert('Turns out I was born and raised here.');
// }
// else {
//   alert('Please enter y/n or yes/no.');
// }

// hateRain = prompt('Since I\'ve lived here all my life, does that mean I hate the rain?').toUpperCase();
// console.log('hateRain', hateRain);
// if (hateRain === 'Y' || hateRain === 'YES') {
//   alert('Surprisingly, I don\'t mind the rain.');
// }
// else if (hateRain === 'N' || hateRain === 'NO') {
//   alert('That\'s right! I find the sound comforting.');
// }
// else {
//   alert('Please enter y/n or yes/no');
// }

// seahawksFan = prompt('This one\'s probably too easy, but since I was born and raised here, am I a fan of the Seahawks?').toUpperCase();
// console.log('seahawksFan', seahawksFan);
// if (seahawksFan === 'Y' || seahawksFan === 'YES') {
//   alert('I told you that question was too easy!');
// }
// else if (seahawksFan === 'N' || seahawksFan === 'NO') {
//   alert('I know not every Seattleite is a Seahawks fan, but... try again!');
// }
// else {
//   alert('Please enter y/n or yes/no');
// }

// seattleResidence = prompt('Maybe I was born in state, but have I always lived in Seattle?').toUpperCase();
// console.log('seattleResidence', seattleResidence);
// if (seattleResidence === 'Y' || seattleResidence === 'YES') {
//   alert('Nope! I\'ve lived in the city since 2012, but I grew up in the south sound.');
// }
// else if (seattleResidence === 'N' || seattleResidence === 'NO') {
//   alert('Right! I went to school in Sumner, WA. If you have no idea where that is, you\'re not alone!');
// }
// else {
//   alert('Please enter y/n or yes/no');
// }

// onlyChild = prompt('Am I an only child?').toUpperCase();
// console.log('onlyChild', onlyChild);
// if (onlyChild === 'Y' || onlyChild === 'YES') {
//   alert('Not true! I have one older sister who also lives in Seattle.');
// }
// else if (onlyChild === 'N' || onlyChild === 'NO') {
//   alert('Yep! I have an older sister who also lives in town.');
// }
// else {
//   alert('Please enter y/n or yes/no');
// }

// alert('Thanks for playing my guessing game, ' + userName + '!');

// var answers = 'My favorite foods and drinks are: ';

var faves = prompt('What\'s one of my favorite foods?').toLowerCase();

for (var j = 0; j < favoriteFoodAndDrink.length; j++) {
  if (faves === favoriteFoodAndDrink[j]) {
    alert('Correct!');
  }
}

// switch(favoriteFoodAndDrink) {
// case 0:
//   alert('Yes! If the question is pizza, the answer is yes.');
//   alert(answers + favoriteFoodAndDrink[0]);
//   break;
// case favoriteFoodAndDrink[1]:
//   alert('Yep. Some of my friends refer to me as a beer snob, but I prefer the term enthusiast.');
//   break;
// case 'coffee':
//   alert('YES. Black coffee is a way of life.');
//   break;
// default:
//   alert('Try again!');
// }

