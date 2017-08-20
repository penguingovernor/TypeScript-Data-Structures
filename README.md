# TypeScript Data Structures

A TypeScript implementation of the various data structures.

### List of data structures
* HashTables
  1. HashTable (collisions resolved by chaining) Utilizies [Move-To-Front Rule](https://en.wikipedia.org/wiki/Self-organizing_list#Move_to_Front_Method_.28MTF.29)
  2. HashTable (collisions resolved by open addressing)


* Linked Lists
  1. SinglyLinkedList

* Stacks
  1. Array-based Stacks


### Usage
1. Run `make all` to make all data structures' js files
2. Add to html as javascript src file

Requires TypeScript to be installed on host system. [Instructions](https://www.typescriptlang.org/index.html#download-links)





### Examples

```javascript

/**
 * This section refers to HashTable where collisions are resolved by chaining
 */


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


/**
 * This section refers to HashTable where collisions are resolved by open addressing
 */

 //Declaration, in this case 101 is the amount of "buckets" in the hashtable  
 var map = new HashMap(101);

 //Adding a key
 map.add("Pizza","Wings");
 map.add("Burger","Fries");
 map.add("Fruits","Veggies");

 //Removing a key
 map.remove("Pizza");

 // Getting value from key
 map.get("Burger");

 //Printing map as string
 map.toString();

/**
 * This section refers to  the SinglyLinkedList data structure
 */

// Declaration
var list = new ListElement();

//Adding a key
list.add("Pizza","Wings");
list.add("Burger","Fries");
list.add("Fruits","Veggies");

//Removing a key
list.remove("Pizza");

// Getting value from key
list.get("Burger");

//Printing map as string
list.toString();

/**
 * This section refers to  the stack data structure
 */

// Declaration
var stack = new ListElement();

//Pusing
stack.push( "soomethin" ) //Any data type will work

//Popping
var string = a.pop();

//Printing stack as string
stack.toString();


```
