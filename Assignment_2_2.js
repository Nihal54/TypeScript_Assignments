//Write a typescript program which contains function named as summation . that function accepts array of numbers and return the summation of each numberr
function Addition(Arr) {
    var iAdd = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        iAdd = iAdd + Arr[iCnt];
    }
    return iAdd;
}
var Summation = [23, 6, 7, 4, 5, 7];
var iRet = 0;
iRet = Addition(Summation);
console.log("The Addition of The all Elememts Are " + iRet);
