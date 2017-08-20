# TypeScriptHashTable

A TypeScript implementation of the HashTable (String to String) abstract data structure.
Utilizies [Move-To-Front Rule](https://en.wikipedia.org/wiki/Self-organizing_list#Move_to_Front_Method_.28MTF.29)

Requires TypeScript to be installed on host system. [Instructions](https://www.typescriptlang.org/index.html#download-links)

### Usage
1. Run `make` to compile to JS file
2. Add to html as javascript src file


### Examples

```javascript

//Declaration, in this case 101 is the amount of "buckets" in the hashtable  
var table = new HashTable(101);

//Adding a key
table.add("Pizza","Wings");
table.add("Burger","Fries");
table.add("Fruits","Veggies");

//Removing a key
table.remove("Pizza");

// Getting value from key
table.get("Burger");

//Printing table as string
table.toString();

```
