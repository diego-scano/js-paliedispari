var userWord = prompt('Inserisci parola');

// funzioni
function pali(word) {
  var reverse = word.split('').reverse('').join('');
  return reverse;
}

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function isPari(num) {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


if (userWord === pali(userWord)) {
  alert('palindroma');
} else {
  alert('non è palindroma')
}

var userEvenOdd = prompt('Scegli: pari o dispari?');
var flag;

if (userEvenOdd !== 'pari' && userEvenOdd !== 'dispari') {
  alert('Scrivi solo o "pari" o "dispari"');
} else {
  if (userEvenOdd === 'pari') {
    flag = true;
  }
  if (userEvenOdd === 'dispari') {
    flag = false;
  }

  var userNumber = prompt('Inserisci numero da 1 a 5');

  if (isNaN(userNumber) && userNumber < 1 || userNumber > 5) {
    alert('Inserisci solamente un numero da 1 a 5');
  } else {
    var sum = userNumber + randomNumber(1, 5);

    if (isPari(sum) && flag === true) {
      alert('hai vinto');
    }
    if (isPari(sum) && flag === false) {
      alert('hai perso');
    }
    if (!isPari(sum) && flag === true) {
      alert('hai perso');
    }
    if (!isPari(sum) && flag === false) {
      alert('hai vinto');
    }
  }

}
