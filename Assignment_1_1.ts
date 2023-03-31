//Name - Nihal Juber Sayyad
//Angular Batch Assignment -1


//Q1 - Write a typescript program which containsd one function named as Maximum. That Function Accepts three parameter and it should return target Largest value from that three inputs


function Maximum(iNo1 : number , iNo2 : number , iNo3 : number) : void
{
    if(iNo1 > iNo2 && iNo3)
    {
        console.log("The Maximum number is "+ iNo1)
    }
    if(iNo2 > iNo3 && iNo1)
    {
        console.log("The MAximum number is : "+ iNo2)

    }
    if(iNo3 > iNo1 && iNo2)
    console.log("The MAximum number is :"+iNo3)


}


var A = 435;
var B = 432;
var C = 433;

Maximum(A,B,C)
