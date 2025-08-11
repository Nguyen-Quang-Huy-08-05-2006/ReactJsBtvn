abstract class Shape {
  name:string;
  constructor(name:string){
    this.name = name
  }
   getName():string{
    return this.name
   }
  abstract getSize():void;
}

class Rectangle extends Shape{
  width:number
  height:number
  constructor(name:string,width:number,height:number){
    super(name);
    this.width = width
    this.height=height
    this.getSize()
  }
  getSize(): void {
    console.log(`chieu rong = ${this.width}, chieu cao = ${this.height}, dien tich = ${this.height * this.width}, chu vi = ${(this.height + this.width) *2}`)
    
  }
}

const shape:Shape[] =[
  new Rectangle("Hinh chu nhat",30,20),
  
] 