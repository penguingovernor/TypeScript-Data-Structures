class StringNode
{
  key : string;
  value : string;

  constructor(k : string, v : string)
  {
    this.key = k;
    this.value = v;
  }

  toString() : string
  {
    return "|Key: "+this.key+" Value: "+this.value+"|";
  }

}


class HashMap
{
  buckets : Array<StringNode>;
  tableSize: number;

  constructor(length : number)
  {
    this.buckets = new Array();
    this.tableSize = length;
    for(var i = 0; i < this.tableSize; i++)
    {
      this.buckets[i] = null;
    }
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

  private hash(key : string, i : number) : number
  {
    return (this.preHash(key) + i) % this.tableSize;
  }

  getIndex(key : string) : number
  {
    var index : number;
    for(var i = 0; i < this.tableSize ; i++)
    {
      index = this.hash(key,i);
      if(this.buckets[index] == null) return index;
    }
    console.log('Table overflow error!');
    return null;
  }

  contains(key : string)
  {

    for(var i = 0, index; i < this.tableSize ; i++)
    {
        index = this.hash(key,i);
        if(this.buckets[index] != null && this.buckets[index].key == key)
          return true;
    }

    return false;
  }

  add(key : string, value : string)
  {
    if(this.contains(key)) return ;

    var index = this.getIndex(key);
    if(index != null)
    {
      this.buckets[index] = new StringNode(key,value);
    }
  }

  remove(key : string)
  {
    if(!this.contains(key))
    {
      console.log("Cannot delete nonexistent key "+key);
      return;
    }

    for(var i = 0, index; i < this.tableSize ; i++)
    {
        index = this.hash(key,i);
        if(this.buckets[index].key == key)
        {
          this.buckets[index] = null;
          break;
        }
    }


  }

  get(key : string) : string
  {
    if(!this.contains(key))
    {
      console.log("Cannot delete nonexistent key "+key);
      return null;
    }

    var value : string = null;

    for(var i = 0, index; i < this.tableSize ; i++)
    {
        index = this.hash(key,i);
        if(this.buckets != null && this.buckets[index].key == key)
        {
          value = this.buckets[index].value;
          break;
        }
    }

    return value;
  }

  toString() : string
  {
    var temp : string = "";
    for(var i = 0 ; i < this.tableSize ; i++)
    {
      if(this.buckets[i] != null) temp += "Bucket "+i+": "+this.buckets[i].toString() + "\n";
    }
    return temp;
  }

  }
