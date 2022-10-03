 //1
 
 function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

ans --->
Counter is not defined

//2
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
ans 
   1
   0

//3
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
ans 
3
3
3

//4 Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function outerf(para,len){
    let x = (para/2)-len
    function innerf(para,x)
    {
      let area = len*x
      console.log(area)
    }
  
    return innerf(para,x)
}

outerf(500,20)
//output-4600

//5  Take a variable in outer function and create an inner function to increase the counter every time it is called

function outerf(a){
    innerf(a);
}
function innerf(x)
{
    return x+=1
}

//6 "Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();
 ans
 pop up message printing 12

 //7 var a = 10;
var x = (function () {
    var a = 12;
    return function () {
      alert(a);
    };
  })();
  x();

  ans 
  pop up message printing 12

//7 var globalVar = ""xyz"";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        ""outerArg = "" + outerArg + ""\n"" +
        ""innerArg = "" + innerArg + ""\n"" +
        ""outerVar = "" + outerVar + ""\n"" +
        ""innerVar = "" + innerVar + ""\n"" +
        ""globalVar = "" + globalVar);
    
    })(456);
})(123);

outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz


