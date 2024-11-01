const drinks = {
  Fanta: 2,
  Pepsi: 3,
  Sprite: 3.5,
};
const userQuestion = prompt("What the choise of goods you want? Fanta - 2$, Pepsi - 3$, Sprite - 2.5$ ");
if (userQuestion === 'Fanta'  || userQuestion === 'Pepsi' || userQuestion === 'Sprite') {
  const money = +prompt("How much money do you have?");
  const price = drinks[userQuestion];
  if (money >= price ) {
    const balanceMoney = money - price;
    alert("Your purchase was successful.");
    alert(` Your money balance is ${balanceMoney}.`);
  } else {
    alert("You don't have enough money.");
  }
} else {
  alert(errorMessage);
}

