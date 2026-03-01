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
   // flag=false;
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



const flag=true;
async function doAllTasks() {
    try {
        const resultA = await taskA(flag);
        console.log(resultA);
        const resultB = await taskB(flag);
        console.log(resultB);
        const resultC = await taskC(flag);
        console.log(resultC);
        console.log("All tasks completed");
    } catch(error) {
        console.error("Error:", error);
    }
}
doAllTasks();