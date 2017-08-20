HASHSRC = src/HashTables
LISTSRC = src/LinkedLists

.PHONY:	all clean

all:	LinkedLists HashTables

# HashTable Categories

HashTables:	HashTableChaining.js

HashTableChaining.js:	$(HASHSRC)/HashTableChainingTemplate.ts SinglyLinkedList.js
	@tsc $(HASHSRC)/HashTableChainingTemplate.ts --outFile ./HashTableChaining.js



# Linked Lists Category

LinkedLists:	SinglyLinkedList.js

SinglyLinkedList.js:	$(LISTSRC)/SinglyLinkedListTemplate.ts
	@tsc $(LISTSRC)/SinglyLinkedListTemplate.ts --outFile ./SinglyLinkedList.js

# Utilities 
clean:
	@rm *.js
