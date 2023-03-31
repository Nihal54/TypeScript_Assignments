var Circle = /** @class */ (function () {
    function Circle(data) {
        this.radius = data;
        this.pi = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.pi * this.radius * this.radius;
    };
    return Circle;
}());
var iRet = 0;
var obj = new Circle(20);
iRet = obj.Area();
console.log("The Are OF Then Circle is :" + iRet);
