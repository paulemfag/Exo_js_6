function reste() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  if(firstNumber && secondNumber != '') {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      alert('Merci de saisir des chiffres');

        }
  else {
    var resultat = firstNumber % secondNumber;
    alert('Le reste de la division entre ' + firstNumber + ' et ' +  secondNumber + ' est de : '+ resultat);
  }
}
else {
  alert('Merci de remplir tous les champs');

}
}
