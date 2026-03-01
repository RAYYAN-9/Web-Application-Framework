function taskA() {
    setTimeout(() => {
        console.log("Task A completed");
    }, 1000);
}

function taskB() {
    setTimeout(() => {
        console.log("Task B completed");
    }, 2000);   
}

function taskC() {
    setTimeout(() => {
        console.log("Task C completed");
    }, 3000);
}

taskA();
taskB();
taskC();
console.log("All tasks initiated");