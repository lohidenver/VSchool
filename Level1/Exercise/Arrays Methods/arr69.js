var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("Fruits: " + fruit);
console.log("Vegetables: " + vegetables);

vegetables.pop();
console.log("1. Vegetables: " + vegetables);

fruit.shift();
console.log("2. Fruits: " + fruit);

var orangeIndex = fruit.indexOf("orange");
console.log("3. Orange: " + orangeIndex);

fruit.push(orangeIndex);
console.log("4. Fruits: " + fruit);

var vegLength = vegetables.length;
console.log("5. Vegetables: " + vegLength);

vegetables.push(vegLength);
console.log("6. Vegetables: " + vegetables);

var food = fruit.concat(vegetables);
console.log("7. Food: " + food);

var foodShort = food.splice(4,2);
console.log("8. Food: " + food)

food = food.reverse();
console.log("9. Food: " + food);

food = food.toString();
console.log("10. Food: " + food);
console.log("10. typeof: "+ typeof food)
