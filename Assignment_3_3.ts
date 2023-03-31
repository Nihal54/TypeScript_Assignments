class Circle{


   radius : number
   pi : number


   constructor(r : number , p? : number)
   {
    this.radius= r;
    this.pi = 3.14
   }

   CalculateArea()
   {
    let Area :number= 0
    Area =this.pi*this.radius*this.radius

    return Area
   }

}

class CircleX extends Circle

{

    constructor( data : number)
    {
        super(data)
    }

    FindCircumference()
    {
        let Ans : number = 0

        Ans = 2*this.pi *this.radius

        return Ans 
    }
}



var iRet : number = 0
var obj1 = new CircleX(10)
iRet = obj1.CalculateArea();
console.log("The Are of Given circle is "+iRet)

iRet = obj1.FindCircumference()
console.log("Circumeference is "+iRet)
