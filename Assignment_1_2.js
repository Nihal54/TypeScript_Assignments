//Name - Nihal Juber Sayyad
//Angular Batch Assignment -1
//Q2- write a typescript program which contains one function named as Area. that function should calculate are of circle/ accept value of radius from user and return its Area:
function AreaOfCircle(iNo) {
    var Pi = 3.14;
    var Area = 0;
    Area = Pi * iNo * iNo;
    return Area;
}
var iRet = 0;
var radius = 5.0;
iRet = AreaOfCircle(radius);
console.log("Area of Circle by given Radius is :" + iRet);
