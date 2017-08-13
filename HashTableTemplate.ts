///<reference path="./ListTemplate.ts" />


class HashTable
{
  container: Array<ListElement>;
  tableSize: number;

  constructor(tableSize : number )
  {
    this.tableSize = tableSize;
    this.container = new Array();
    for(var i = 0 ; i < tableSize ; i++) this.container[i] == null;
  }

  private preHash(key : string) : number
  {
    var hash : number = 0;
    var i : number;
    var chr : number;
    if(key.length == 0) return hash;
    for(i = 0; i < key.length ; i++)
    {
      chr = key.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }

  private hash(key : string) : number
  {
    return this.preHash(key) % this.tableSize;
  }

  add(key : string , value : string)
  {
    var index : number = this.hash(key);
    if(this.container[index] == null) this.container[index] = new ListElement();
    this.container[index].add(key,value);
  }

  remove(key : string)
  {
    var index : number = this.hash(key);
    if(this.container[index] == null) return;
    this.container[index].remove(key);
  }

  get(key : string) : string
  {
    var index : number = this.hash(key);
    if(this.container[index] == null) return null;
    return this.container[index].get(key);
  }

  toString() : string
  {
    var temp : string = "";
    for(var i = 0 ; i < this.tableSize ; i++)
    {
      if(this.container[i] != null) temp += "Bucket "+i+": "+this.container[i].toString() + "\n";
    }
    return temp;
  }





}
