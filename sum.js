/*@flow*/

/*--------- Type annotating a function --------*/
function foo(x: number, y: number): number{
  return x + y;
}

foo(12, 42);

/*-------- Type annotating an array ----------*/
var foo1 : Array<number> = [1,2,3];

/*-------- Type annotating a Class ---------*/
class Bar{
  x:string;           // x should be string       
  y:string | number;  // y can be either a string or a number
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
}

var bar1 : Bar = new Bar("hello",4);

/*--------- Type annonating an object ---------*/

var obj : {a : string, b : number, c: Array<string>, d : Bar} = {
  a : "hello",
  b : 42,
  c : ["hello", "world"],
  d : new Bar("hello",3)
}

// could be either string or null
var foo_null : ?string = null;