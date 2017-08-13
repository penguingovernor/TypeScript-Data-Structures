all: concat

concat: ListTemplate.js HashTableTemplate.js
	@touch HashTable.js
	@cat ListTemplate.js >> HashTable.js
	@cat HashTableTemplate.js >> HashTable.js
	@rm ListTemplate.js HashTableTemplate.js

ListTemplate.js:	ListTemplate.ts
	@tsc ListTemplate.ts

HashTableTemplate.js: HashTableTemplate.ts
	@tsc HashTableTemplate.ts

clean:
	@rm -f *.js
