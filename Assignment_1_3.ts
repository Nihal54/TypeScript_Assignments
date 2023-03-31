//Name - Nihal Juber Sayyad
//Angular Batch Assignment -1

//Q3- Write  a Typescript program which contains named as display factors. that functions should accept one numbersa and display factors of that numbers 


function DisplayFactors( iNo : number): void

{

 var iCnt : number = 0

 for(iCnt = 0 ; iCnt <= iNo / 2; iCnt++)

 {
    if(iNo%iCnt == 0)
    {

        console.log(iCnt)
    }
 }


}
var iNo1  : number =20

DisplayFactors(iNo1)
