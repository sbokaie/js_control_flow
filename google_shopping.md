# Google Shopping Lab
## Conditionals and Loops


Use the product search result in your file to check the following:

1.) The `kind` of results you're are dealing  are `shopping#products`. Go through the `items` and find all results that have `kind` of `shopping#product`. How many are there? Where else is this count information stored in the search results?

var instances = 0;

var items = data['items'];

for (i=0; i < items.length; i += 1){
	var myItem = items[i];
	if (myItem['kind'] === 'shopping#product') {
	  instances +=1;

	};
}

console.log(instances);


2.) Find all items with a `backorder` availability in `inventories`.

var instances = 0;

var items = data['items'];

for (i=0; i < items.length; i += 1){
	var myItem = items[i];
	for (j=0, j < items[i].product.inventories.length; j += 1){
		if (items[i].product.inventories[j].availability === "backorder") 
			console.log(items[i])
			instances += 1;
		}
	
}

3.) Find all items with more than one image link.


4.) Find all `canon` products in the items (careful with case sensitivity).

5.) Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".

6.) Print all the products with their **brand**, **price**, and a **image link**
