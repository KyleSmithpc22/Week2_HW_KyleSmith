var isHotOutside = false;
var isWeekday = true;
var hasMoneyInPocket = false;



var costOfMilk = 3.75;
var moneyInWallet = 5.00;
var thirstLevel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ! sets the opposite of what the var is set to
var shouldByIcecream = !isHotOutside && !hasMoneyInPocket;
var willGoSwimming = !isHotOutside;
var isAGoodDay = thirstLevel && !isWeekday && !hasMoneyInPocket;
var willBuyMilk = thirstLevel && !hasMoneyInPocket && moneyInWallet > costOfMilk;

// uses the newest set of vars to decide these simple questions
console.log("Should i buy ice cream? " + shouldByIcecream);
console.log("Should i go Swimming? " + willGoSwimming);
console.log("Is today a good day? " + isAGoodDay);
console.log("Should i buy some milk? " + willBuyMilk);