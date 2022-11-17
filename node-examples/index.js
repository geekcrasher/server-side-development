
// * using node module 
var rect = require("./rectangle")

/*
// * Creating an object for perimeter and area
var rect = {
   perimeter: (x,y) => (2*(x+y)),
   area: (x,y) => (x*y)
}
*/

function solveRect(l,b) {
   console.log(`Solving for rectangle with l = ${l} and b = ${b}`)

   rect(l,b, (err, rectangle) => {
      if(err) {
         console.log("ERROR: ", err.message)
      }
      else {
         console.log(`The area of the rectangle of dimension l = ${l} and b = ${b} is ${rectangle.area()}`)
         console.log(`The perimeter of the rectangle of dimension l = ${l} and b = ${b} is ${rectangle.perimeter()}`)
      }
   })

/*
   if(l<=0 || b<=0) {
      console.log(`Rectangle dimensions should be greater than zero: l = ${l}, and b = ${b}`)
   }
   else {
      console.log(`The area of the rectangle is ${rect.area(l,b)}`)
      console.log(`The perimeter of the rectangle is ${rect.perimeter(l,b)}`)
   }
*/
}

solveRect(2,4)
solveRect(3,6)
solveRect(2,4)
solveRect(-3,4)



