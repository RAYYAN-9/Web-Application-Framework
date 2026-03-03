import path from 'node:path';

console.log(path.basename('C:\\Users\\A\\Desktop\\WAF\\OS-Module.js', '.js')); // Output: OS-Module

const arrPaths="C:\\Users\\A\\Desktop\\WAF\\OS-Module.js; C:\\Users\\A\\Desktop\\WAF\\Path-Module.js; C:\\Users\\A\\Desktop\\WAF\\Files.js".split(path.delimiter);
//console.log(arrPaths);
console.log(arrPaths[1]);

console.log(path.dirname('C:\\Users\\A\\Desktop\\WAF\\OS-Module.js')); // Output: C:\Users\A\Desktop\WAF

console.log(path.extname('C:\\Users\\A\\Desktop\\WAF\\OS-Module.js')); // Output: .js

console.log(path.format({
    root:"C:\\Users\\A",
    dir:"C:\\Users\\A\\Desktop\\WAF",
    base:"OS-Module.js",
    ext:".js",
    name:"OS-Module"
}));

console.log(path.matchesGlob('C:\\Users\\A\\Desktop\\WAF\\OS-Module.js', 'C:\\Users\\A\\Desktop\\WAF\\*.js')); // Output: true

const obj=path.parse('C:\\Users\\A\\Desktop\\WAF\\OS-Module.js');
console.log(obj);
console.log(path.sep); // Output: \
console.log(obj.base); // Output: OS-Module.js
console.log(obj.root); // Output: C:\
console.log(obj.name); // Output: OS-Module
console.log(obj.ext); // Output: .js

console.log(path.isAbsolute('C:\\Users\\A\\Desktop\\WAF\\OS-Module.js')); // Output: true
console.log(path.isAbsolute('.\\OS-Module.js')); // Output: false
console.log(path.isAbsolute('C:\\Users\\A\\Desktop\\...')); // Output: true
console.log(path.isAbsolute('C:\\Users\\A\\Desktop\\WAF\\...')); // Output: true
