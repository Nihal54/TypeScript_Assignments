//Write a typescript program which returns the second maximum number 
function secondmaximum(Arr) {
    var iCnt = 0;
    var iMax = 0;
    var SecondMax = 0;
    var temp = 0;
    iMax = Arr[iCnt];
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > iMax) {
            iMax = Arr[iCnt];
        }
    }
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] < iMax) {
            if (SecondMax < Arr[iCnt]) {
                SecondMax = Arr[iCnt];
            }
        }
    }
    return SecondMax;
}
var iRet = 0;
var max = [10, 403, 43, 24, 432, 24];
iRet = secondmaximum(max);
console.log(" second Maximum element from array is " + iRet);
