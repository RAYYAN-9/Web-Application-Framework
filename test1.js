//*********export keyword*********

// import {PI, getArea, getCircumference} from './test.js';

// console.log("PI:", PI);
// console.log("Area of circle with radius 5:", getArea(5));
// console.log("Circumference of circle with radius 5:", getCircumference(5));

// *********export default*********
// import object from './test.js';

// console.log("PI:", object.PI);
// console.log("Area of circle with radius 5:", object.getArea(5));
// console.log("Circumference of circle with radius 5:", object.getCircumference(5));

// *********export has a module*********
// import {PI, getArea, getCircumference} from './test.js';

// console.log("PI:", PI);
// console.log("Area of circle with radius 5:", getArea(5));
// console.log("Circumference of circle with radius 5:", getCircumference(5));


//*********export class*********
import {PI, getArea, getCircumference, User} from './test.js';

const object = new User("Muhammad Rayyan Bhatti", "Mr.Calipha@example.com", 20);
console.log("User Info:", object.getInfo());

console.log("PI:", PI);
console.log("Area of circle with radius 5:", getArea(5));
console.log("Circumference of circle with radius 5:", getCircumference(5));