//*********export keyword*********

// export const PI = 3.1415;
// export function getArea(radius){
//     return  PI * radius * radius;
// }

// export function getCircumference(radius){
//     return 2 * PI * radius;
// }


// *********export default*********

//  const PI = 3.1415;
//  function getArea(radius){
//     return  PI * radius * radius;
// }

//  function getCircumference(radius){
//     return 2 * PI * radius;
// }


// export default {
//     PI,
//     getArea,
//     getCircumference

//     // pi: PI,
//     // gA:getArea,
//     // gC:getCircumference
// };

// *********export has a module*********
// module.exports = {
//     PI,
//     getArea,
//     getCircumference
// }

//*********export class*********


export const PI = 3.1415;
 export function getArea(radius){
    return  PI * radius * radius;
}

 export function getCircumference(radius){
    return 2 * PI * radius;
}


export class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;//string returning template literal
       // return {Name: this.name, Email: this.email, Age: this.age};//object returning 
    }
}