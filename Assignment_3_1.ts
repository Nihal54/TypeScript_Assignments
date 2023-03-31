class Arithmetic
{


    Number1: number 
    Number2: number
    

    constructor(Number10: number , Number20: number)
    {
        this.Number1 = Number10
        this.Number2 = Number20


    }

    Addition()
    {
        return this.Number1+this.Number2

    }

    Substraction()
    {
        return this.Number1-this.Number2

    }

    Multiplication()
    {
        return this.Number1*this.Number2

    }

    Division()

    {
        return this.Number1/this.Number2


    }
}
var iRet : number =0
var obj1 = new Arithmetic(30,40)
var obj2 = new Arithmetic(40,30)

iRet = obj1.Addition()
console.log("Addition of two number is  "+iRet)

iRet = obj2.Substraction()
console.log("Substraction of two number is  "+iRet)

iRet = obj1.Multiplication()
console.log("Multiplication of two number is "+iRet)

iRet = obj1.Division()
console.log("Divivsion is "+iRet);