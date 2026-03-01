function taskA(callback) {
    setTimeout(() => {
        console.log("Task A completed");
        callback();
    }, 1000);
}

function taskB(callback) {
    setTimeout(() => {
        console.log("Task B completed");
        callback();
    }, 2000);
}

function taskC(callback) {
    setTimeout(() => {
        console.log("Task  C completed");
        callback();
    }, 3000);
}

taskA(() => {
    taskB(() => {
        taskC(() => {
            console.log("All tasks completed");
        });                                                                                  
    });
});