var userWord = prompt('Inserisci parola');

// funzioni
function pali(word, reverse) {
  reverse = word.split('').reverse('').join('');
  return reverse;
}

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}


if (userWord === pali(userWord)) {
  alert('palindroma');
} else {
  alert('non è palindroma')
}

var userEvenOdd = prompt('Scegli: pari o dispari?');
var sum = 0;
var flag;

if (userEvenOdd !== 'pari' && userEvenOdd !== 'dispari') {
  alert('Scrivi solo o "pari" o "dispari"');
} else {
  if (userEvenOdd === 'pari') {
    flag === true;
  }
  if (userEvenOdd === 'dispari') {
    flag === false;
  }

  var userNumber = prompt('Inserisci numero da 1 a 5');

  if (isNaN(userNumber) && userNumber < 1 || userNumber > 5) {
    alert('Inserisci solamente un numero da 1 a 5');
  } else {
    randomNumber(1, 5);
    sum = userNumber + result;
    if (sum % 2 === 0 && flag === true) {
      alert('hai vinto');
    }
    if (sum % 2 === 0 && flag === false) {
      alert('hai perso');
    }
    if (sum % 2 !== 0 && flag === true) {
      alert('hai perso');
    }
    if (sum % 2 !== 0 && flag === false) {
      alert('hai vinto');
    }
  }

}
