let inputAdults = document.getElementById("adults")
let inputChildren = document.getElementById("children")
let inputDuration = document.getElementById("duration")

let result = document.getElementById("result")

function calc() {

  let adults = inputAdults.value;
  let children = inputChildren.value;
  let duration = inputDuration.value;

  let totalAmoutOfMeat = meatPP(duration) * adults + (meatPP(duration) / 2 * children);
  let totalAmountOfBear = bearPP(duration) * adults;
  let totalAmountOfDrinks = drinksPP(duration) * adults + (drinksPP(duration)  / 2 * children)

  result.innerHTML = `<p>${totalAmoutOfMeat/1000} Kg de Carne </p>`
  result.innerHTML += `<p>${Math.ceil(totalAmountOfBear/355)} Latas de Cerveja </p>`
  result.innerHTML += `<p>${Math.ceil(totalAmountOfDrinks/2000)} Pet's de Bebidas </p>`
}

function meatPP(duration) {
  if (duration >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function bearPP(duration) {
  if (duration >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function drinksPP(duration) {
  if (duration >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}