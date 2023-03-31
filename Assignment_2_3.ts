//Write a typescript program which returns the second maximum number 

function secondmaximum(Arr : number[]): number
{

    var iCnt : number = 0
    var iMax : number = 0
    var SecondMax : number = 0
    var temp : number = 0
    iMax = Arr[iCnt];
    for( iCnt = 0; iCnt < Arr.length ; iCnt++)

    {
        if(Arr[iCnt]>iMax)

        {
          
            iMax = Arr[iCnt]
        }
    
   

    }
    
    for( iCnt = 0; iCnt < Arr.length ; iCnt++)
    {

       if(Arr[iCnt]<iMax)
       {
          if(SecondMax < Arr[iCnt])
          {
             SecondMax = Arr[iCnt];
          }
       }
    }
    return SecondMax
    }

var iRet : number = 0

var max : number[]= [10,403,43,24,432,24]

iRet = secondmaximum(max)

console.log(" second Maximum element from array is "+iRet)