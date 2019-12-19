var rectangleArea = function(length, width){
  var recArea = length * width; 
  return recArea;

}

var triangleArea = function(base, height){
  var triArea = (base * height)/2;
  return triArea; 
}

var circleArea = function (radius){
  var circArea = Math.PI * Math.pow(radius,2);
  return circArea;


}

console.log(rectangleArea(5,10));
     // should print 50
console.log(triangleArea(10,5));
console.log(circleArea(5));