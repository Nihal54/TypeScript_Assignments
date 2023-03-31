class Circle
{

    radius : number 
    pi : number
    
    
    constructor( data : number )

    {

        this.radius = data
        this.pi = 3.14
    }

    Area()
    {

        return this.pi * this.radius * this.radius
    }






}

var iRet : number  = 0
var obj = new Circle (20)

iRet = obj.Area()
console.log("The Are OF Then Circle is :"+iRet)
