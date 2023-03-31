var Arithmetic = /** @class */ (function () {
    function Arithmetic(Number10, Number20) {
        this.Number1 = Number10;
        this.Number2 = Number20;
    }
    Arithmetic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmetic.prototype.Substraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithmetic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithmetic;
}());
var iRet = 0;
var obj1 = new Arithmetic(30, 40);
var obj2 = new Arithmetic(40, 30);
iRet = obj1.Addition();
console.log("Addition of two number is  " + iRet);
iRet = obj2.Substraction();
console.log("Substraction of two number is  " + iRet);
iRet = obj1.Multiplication();
console.log("Multiplication of two number is " + iRet);
iRet = obj1.Division();
console.log("Divivsion is " + iRet);
