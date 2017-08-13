class NodeElement
{
  key: string;
  value: string;
  next: NodeElement;

  constructor(key: string, value: string)
  {
    this.key = key; this.value = value; this.next = null;
  }

  toString() : string
  {
    return "|Key: "+this.key+" Value: "+this.value+"|";
  }
}

class ListElement
{
  head: NodeElement;

  constructor()
  {
    this.head = null;
  }

  contains(key : string) : boolean
  {
    for(var i = this.head ; i != null ; i = i.next)
    {
      if(i.key == key) return true;
    }
    return false;
  }

  add(key : string , value : string)
  {
    if(this.contains(key)) return;
    if(this.head == null) {this.head = new NodeElement(key,value); return; }
    var temp : NodeElement = null;
    for(temp = this.head ; temp.next != null; temp = temp.next);
    temp.next = new NodeElement(key,value);
  }

  remove(key : string)
  {
    if(!this.contains(key)) return;
    if(this.head.key == key) { this.head = this.head.next; return; }
    var temp : NodeElement = null;
    for(temp = this.head ; temp.next != null ; temp = temp.next)
    {
      if(temp.next.key == key)
      {
        temp.next = temp.next.next;
        return;
      }
    }
  }

  toString() : string
  {
    var temp = "";
    for(var i = this.head ; i != null ; i = i.next) temp += i.toString() + "->";
    return temp;
  }

  get(key : string) : string
  {
    if(!this.contains(key)) { return null;  }
    if(this.head.key == key){ return this.head.value; }
    var temp : NodeElement = null;
    for(var i = this.head ; i.next != null ; i = i.next )
    {
      if(i.next.key == key)
      {
        temp = i.next;
        i.next = temp.next;
        temp.next = this.head;
        this.head = temp;
        return this.head.value;
      }
    }
  }

}
