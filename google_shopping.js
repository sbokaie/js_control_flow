var data = require("./products.json")

// Write your solutions below

var instances = 0;

var items = data['items'];

for (i=0; i < items.length; i += 1){
	var myItem = items[i];
	if (myItem['kind'] === 'shopping#product') {
	  instances +=1;

	};
}

console.log(instances);

//console.log(data["items"]); 

var maxLength = 5;

var someWords = [yes, no, chipotle, germany, cow, oakland];

for (i=0, i > maxLength; i += 1){
	console.log(if(someWords[i] >== maxLength);
}
