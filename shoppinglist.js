let shoppingList = ['poptarts','ramen noodles','chips','salsa','coffee'];
shoppingList.push('fruit loops');
let coffeeIndex = shoppingList.indexOf('coffee');
if (coffeeIndex !== -1){
    shoppingList[coffeeIndex] = 'fair trade coffee';

}
let chipsIndex = shoppingList.indexOf('chips');
if (chipIndex !== -1) {
    shoppingList.splice(chipsIndex, 2, 'rice', 'beans');
}
let shoppingCart = [];
let lastIteam = shoppingList.pop();
shoppingCart.push(lastIteam);
let firstIteam = shoppingList.shift();
shoppingCart.push(firstIteam);
while (shoppingList.length > 0) {
    shoppingCart.push(shoppingList.pop());
}
shoppingCart.sort();
shoppingCart.reverse();
console.log(shoppingCart.join(''));