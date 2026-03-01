// function taskA() {
//     return new Promise((resolve,reject) => {
//          setTimeout(() => {
//             resolve("Task A completed");
//         }, 3000);
//     });
// }

// function taskB() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Task B completed");
//         }, 2000);   
//     });
// }

// function taskC() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Task C completed");
//         }, 1000);
//     });
// }

// taskA().then(value => {
//     console.log(value);
//     return taskB();
// }).then(value => {
//     console.log(value);
//     return taskC();
// }).then(value => {
//     console.log(value);
//     console.log("All tasks completed");
// }).finally(() => {
//     console.log("All tasks initiated");
// });



function taskA(flag) {
    return new Promise((resolve,reject) => {
         setTimeout(() => {
            if(flag) {
            resolve("Task A completed");
            } else {
                reject("Task A failed");
            }
        }, 3000);
    });
}

function taskB(flag) {
  //  flag=false;
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(flag) {
                resolve("Task B completed");
            } else {
                reject("Task B failed");
            }
        }, 2000);   
    });
}

function taskC(flag) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(flag) {
                resolve("Task C completed");
            } else {
                reject("Task C failed");
            }
        }, 1000);
    });
}

const flag = true;
taskA(flag).then(value => {
    console.log(value);
    return taskB(flag);
}).then(value => {
    console.log(value);
    return taskC(flag);
}).then(value => {
    console.log(value);
    console.log("All tasks completed");
}).catch(error => {
    console.error("Error:", error);
})
.finally(() => {
    console.log("All tasks initiated");
});