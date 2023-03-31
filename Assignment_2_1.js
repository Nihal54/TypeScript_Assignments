function maximum(Arr) {
    var iCnt = 0;
    var iMax = 0;
    for (iCnt = 1; iCnt <= Arr.length; iCnt++) {
        if (Arr[iCnt] > iMax) {
            iMax = Arr[iCnt];
        }
    }
    return iMax;
}
var iRet = 0;
var max = [10, 403, 43, 24, 432, 24];
iRet = maximum(max);
console.log("Maximum element from array is " + iRet);
