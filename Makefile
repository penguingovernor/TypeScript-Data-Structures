HASHSRC = src/HashTables
LISTSRC = src/LinkedLists
STACKSRC = src/Stacks

.PHONY:	all clean

all:	LinkedLists HashTables Stacks

# HashTable Categories

HashTables:	HashTableChaining.js HashTableOpenAdressing.js

HashTableChaining.js:	$(HASHSRC)/HashTableChainingTemplate.ts $(LISTSRC)/SinglyLinkedListTemplate.ts
	@tsc $(HASHSRC)/HashTableChainingTemplate.ts --outFile ./out/HashTableChaining.js
	@echo "Made HashTableChaining.js!"

HashTableOpenAdressing.js:	$(HASHSRC)/HashTableOpenAdressingTemplate.ts
	@tsc $(HASHSRC)/HashTableOpenAdressingTemplate.ts --outFile ./out/HashTableOpenAdressing.js
	@echo "Made HashTableOpenAdressing.js!"

# Linked Lists Category

LinkedLists:	SinglyLinkedList.js

SinglyLinkedList.js:	$(LISTSRC)/SinglyLinkedListTemplate.ts
	@tsc $(LISTSRC)/SinglyLinkedListTemplate.ts --outFile ./out/SinglyLinkedList.js
	@echo "Made SinglyLinkedList.js!"

# Stack

Stacks:	StackArray.js

StackArray.js:	$(STACKSRC)/StackArrayTemplate.ts
	@tsc $(STACKSRC)/StackArrayTemplate.ts --outFile ./out/StackArray.js
	@echo "Made StackArray.js!"

# Utilities
clean:
	@rm -rf out
