HASHSRC = src/HashTables
LISTSRC = src/LinkedLists

.PHONY:	all clean

all:	LinkedLists HashTables

# HashTable Categories

HashTables:	HashTableChaining.js HashTableOpenAdressing.js

HashTableChaining.js:	$(HASHSRC)/HashTableChainingTemplate.ts $(LISTSRC)/SinglyLinkedListTemplate.ts
	@tsc $(HASHSRC)/HashTableChainingTemplate.ts --outFile ./out/HashTableChaining.js

HashTableOpenAdressing.js:	$(HASHSRC)/HashTableOpenAdressingTemplate.ts
	@tsc $(HASHSRC)/HashTableOpenAdressingTemplate.ts --outFile ./out/HashTableOpenAdressing.js



# Linked Lists Category

LinkedLists:	SinglyLinkedList.js

SinglyLinkedList.js:	$(LISTSRC)/SinglyLinkedListTemplate.ts
	@tsc $(LISTSRC)/SinglyLinkedListTemplate.ts --outFile ./out/SinglyLinkedList.js

# Utilities
clean:
	@rm -rf out
