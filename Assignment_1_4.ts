export
//Q4- Write typescript program which contains one function Named as checkprime that function should accept one number and it should return true if the given number is prime otherwise return false


function CheckPrime(iNo : number) : boolean



{
    if (iNo <= 1)
    {

        return false
    }
    var iCnt : number = 0
    for(iCnt = 2 ; iCnt <iNo ; iCnt++)
    {
        if(iNo%iCnt == 0)
        {

            return false
        }
        else

        {
          return true


        }



    }
}

var iNo1 : number = 11
var iRet : boolean


iRet = CheckPrime(iNo1)

if(iRet == true)
{

    console.log("It is a primary number")
}
else
{
    console.log("It is not a primary number")
}


