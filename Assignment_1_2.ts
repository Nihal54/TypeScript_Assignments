//Name - Nihal Juber Sayyad
//Angular Batch Assignment -1


//Q2- write a typescript program which contains one function named as Area. that function should calculate are of circle/ accept value of radius from user and return its Area:


function AreaOfCircle( iNo : number): number

{

    var Pi : number = 3.14

    var Area : number = 0
    Area = Pi*iNo*iNo
    return Area



}
var iRet : number = 0
var radius : number = 5.0

iRet = AreaOfCircle(radius)

console.log("Area of Circle by given Radius is :"+iRet)

