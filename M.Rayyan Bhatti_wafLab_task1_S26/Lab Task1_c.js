function register(){
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            console.log("User registered");
            resolve();
        }, 2500);  
});
}

function sendWelcomeMessage(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Welcome message sent");
        resolve();      
    }, 3000);
});
}

function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User logged in");
            resolve();
        }, 2000);   
    });
}

function fetchProfile(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User profile fetched");
            resolve();
        }, 4000);    
    });
}

function updateStatus(){
    return new Promise((resolve, reject) => {   
    setTimeout(() => {
        console.log("User status updated");
        resolve();
    }, 1500);
});
}

function logout(){
    return new Promise ((resolve,reject)=>{
         setTimeout(() => {
        console.log("User logged out");
        resolve();
    }, 3500);
    });
   
}

register()
.then(value => {
    console.log(value);
    return sendWelcomeMessage();
}).then(value => {
    console.log(value);
    return login();
}).then(value => {
    console.log(value);
    return fetchProfile();
}).then(value => {
    console.log(value);
    return updateStatus();
}).then(value => {
    console.log(value);
    return logout();
}).then(value => {
    console.log(value);
    console.log("All operations finished!");
});




// register()
// .then(sendWelcomeMessage)
// .then(login)
// .then(fetchProfile)
// .then(updateStatus)
// .then(logout)
// .then(() => {
// console.log("All operations finished!");
// });

