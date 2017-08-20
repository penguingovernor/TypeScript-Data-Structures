class Stack
{
  entries: Array<any>;
  top : number;

  constructor()
  {
    this.entries = new Array();
    this.top = 0;
  }

  pop() : any
  {
    if(this.top != 0)
    {
      this.top--;
      return this.entries[this.top];
    }
  }

  push(item : any)
  {
    this.entries[this.top] = item;
    this.top++;
  }

  isEmpty() : boolean
  {
    return this.top == 0;
  }

  toString() : string
  {
    var temp = "";
    for(var i = this.top - 1; i >= 0; i--)
    {
      if(i == this.top - 1) temp += this.entries[i].toString() + " <- top\n";
      else  temp+= this.entries[i] + "\n";
    }
    return temp;
  }
}
