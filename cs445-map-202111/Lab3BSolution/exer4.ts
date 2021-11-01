var baseObject = {
    width:number;
    length:number;
};
var baseObject = {
    width:0;
    length:0;
};
var rectangle:{
    width:number;
    length:number;
    calcSize:() => number;
}
let rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize()); // 10
