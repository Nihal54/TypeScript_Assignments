var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(r, p) {
        this.radius = r;
        this.pi = 3.14;
    }
    Circle.prototype.CalculateArea = function () {
        var Area = 0;
        Area = this.pi * this.radius * this.radius;
        return Area;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(data) {
        return _super.call(this, data) || this;
    }
    CircleX.prototype.FindCircumference = function () {
        var Ans = 0;
        Ans = 2 * this.pi * this.radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var iRet = 0;
var obj1 = new CircleX(10);
iRet = obj1.CalculateArea();
console.log("The Are of Given circle is " + iRet);
iRet = obj1.FindCircumference();
console.log("Circumeference is " + iRet);
