// *********Using Callbacks to read a file synchronously*********

// import fs from 'node:fs';

// fs.readFileSync("C:\\Users\\A\\Desktop\\WAF\\Promise.js", "utf-8", (err, data) => {
//    if(data){
//     console.log(data);
//    } else {
//     console.error("Error reading file:", err);
//    }
// });


// *********Using Promises to read a file asynchronously*********
// import fs from 'node:fs/promises';

// fs.readFile("D:\\Python\\requirements.txt", "utf-8")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error("Error reading file:", err);
//     });


    // *********Using async/await to read a file asynchronously*********
// import fs from 'node:fs/promises';

//     async function read() {
//         try {
//             const data = await fs.readFile("D:\\Python\\requirements.txt", "utf-8");
//             console.log(data);
//         } catch (err) {
//             console.error("Error reading file:", err);
//         }
//     }
//     read();



//import fs from 'node:fs';

 //*********Using Callbacks to write a file synchronously*********
//fs.writeFileSync("new.txt","This is a sample text");

//*********Using Callbacks to write a file asynchronously*********
// fs.writeFile("newFileCB.txt","This is an other sample - callback", (err)=>{
//     if(err){
//         console.error("Data written asynchronously with callback ", err);
//     }
//     else{      
//           console.log("Data written asynchronously with callback ");
//     }});



// *********Using Promises to write a file asynchronously*********
// import fs from 'node:fs/promises';


// fs.writeFile("newFileChain.txt","This is a some example text for asynchronous method using chaining method")
// .then(()=>{
//     console.log("Data written asynchronously with promise using chaining method");
// })
// .catch((err)=>{
//     console.error("Error writing file with chaining method ", err);
// });


//**********Using async/await to write a file asynchronously*********
// import fs from 'node:fs/promises';

// async function write() {
//     try {
//         await fs.writeFile("newFileAsyncAwait.txt", "This is a some example text for asynchronous method using async/await");
//         console.log("Data written asynchronously with promise using async/await");
//     } catch (err) {
//         console.error("Error writing file with async/await ", err);
//     }
// }
// write();


//*********Using Callbacks to append a file synchronously*********
// import fs from 'node:fs/promises';

// async function append() {
//     try {
//         await fs.appendFile("newFileAsyncAwait.txt", "\nThis is an additional line appended to the file.");
//         console.log("Data appended asynchronously with promise using async/await");
//     } catch (err) {
//         console.error("Error appending file with async/await ", err);
//     }
// }
// append();


//*********Using Promises to append a file through chaining asynchronously*********
// import fs from 'node:fs/promises';

// fs.appendFile("newFileChain.txt", "\nThis is an additional line appended to the file using chaining method")
// .then((error) => {
//     if(!error){
//     console.log("Data appended asynchronously with promise using chaining method");
// }
// else{
//     console.error("Error appending file with chaining method ", error);
// }
// });



//*********Using Callbacks to append a file asynchronously*********
//  import fs from 'node:fs';

//  fs.appendFile("newFileCB.txt", "\nThis is an additional line appended to the file using callback method", 
//     (err)=>{
//     if(!err){
//         console.log("Data appended asynchronously with callback method ");
//     }
//     else{
//         console.error("Error appending file with callback method ", err);
//     }
// });



//*********Using Callbacks to append a file synchronously*********/
// import fs from 'node:fs';

// fs.appendFileSync("newFileSync.txt", "This is an additional line appended to the file using synchronous method");


//*********Using Callbacks to delete a file synchronously*********/
// import fs from 'node:fs';

// fs.unlinkSync("newFileSync.txt");




//*********Using Callbacks to delete a file asynchronously*********/
// import fs from 'node:fs';

// fs.unlink("newFileCB.txt", (err) => {
//     if (!err) {
//         console.log("File deleted successfully with callback method");
//     } else {
//         console.error("Error deleting file with callback method ", err);
//     }
// });


//*********Using Promises to delete a file through chaining asynchronously*********/
// import fs from 'node:fs/promises';

// fs.unlink("newFileChain.txt")
//     .then(() => {
//         console.log("File deleted successfully with promise using chaining method");
//     })
//     .catch((err) => {
//         console.error("Error deleting file with promise using chaining method ", err);
//     });



//*********Using async/await to delete a file asynchronously*********
import fs from 'node:fs/promises';

async function deleteFile() {
    try {
        await fs.unlink("newFileAsyncAwait.txt");
        console.log("File deleted successfully with promise using async/await");
    } catch (err) {
        console.error("Error deleting file with promise using async/await ", err);
    }
}
deleteFile();