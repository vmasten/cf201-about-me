"use strict";

var howTall, bornInWA, hateRain, seahawksFan, seattleResidence;

howTall = prompt('How tall am I (in inches)?');
console.log('howTall', howTall);
if (howTall < 76) {
  alert('I am not that short.');
} else if (howTall === '76') {
  alert('Wow, you got it exactly right!');
} else {
  alert('Whoa, I\'m not that tall!');
}

alert('The following questions require a response of y or n.');

bornInWA = prompt('Was I born in Washington State?');
console.log('bornInWA', bornInWA);
if (bornInWA.toUpperCase() === 'Y') {
  alert('That\'s right!')
}
else if (bornInWA.toUpperCase() === 'N') {
  alert('Turns out I was born and raised here.');
}
else {
  alert('Please enter y or n.');
}

hateRain = prompt('Since I\'ve lived here all my life, does that mean I hate the rain?');
console.log('hateRain', hateRain);
if (hateRain.toUpperCase() === 'Y') {
  alert('Surprisingly, I don\'t mind the rain.');
}
else if (hateRain.toUpperCase() === 'N') {
  alert('That\'s right! I find the sound comforting.');
}
else {
  alert('Please enter y or n');
}

seahawksFan = prompt('This one\'s probably too easy, but since I was born and raised here, am I a fan of the Seahawks?');
console.log('seahawksFan', seahawksFan);
if (seahawksFan.toUpperCase() === 'Y') {
  alert('I told you that question was too easy!');
}
else if (seahawksFan.toUpperCase() === 'N') {
  alert('I know not every Seattleite is a Seahawks fan, but... try again!')
}
else {
  alert('Please enter y or n');
}

seattleResidence = prompt('Maybe I was born in state, but have I always lived in Seattle?');
console.log('seattleResidence', seattleResidence);
if (seattleResidence.toUpperCase() === 'Y') {
  alert('Nope! I\'ve lived in the city since 2012, but I grew up in the south sound.');
}
else if (seattleResidence.toUpperCase() === 'N') {
  alert('Right! I went to school in Sumner, WA. If you have no idea where that is, you\'re not alone!');
}
else {
  alert('Please enter y or n');
}
