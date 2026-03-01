function register(flag){
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            if(flag) {
            resolve("User registered");
            } else {
                reject("Registration failed");
            }
        }, 2500);  
});
}

function sendWelcomeMessage(flag){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(flag) {
            resolve("Welcome message sent");
        } else {
            reject("Failed to send welcome message");
        }
             
    }, 3000);
});
}

function login(flag){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if(flag) {
            resolve("User logged in");
        } else {
            reject("Failed to login");
        }
        }, 2000);   
    });
}

function fetchProfile(flag){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(flag) {
                resolve("User profile fetched");
            } else {
                reject("Failed to fetch profile");
            }
        }, 4000);    
    });
}

function updateStatus(flag){
    return new Promise((resolve, reject) => {   
    setTimeout(() => {
        if(flag) {
            resolve("User status updated");
        } else {
            reject("Failed to update status");
        }
    }, 1500);
});
}

function logout(flag){
    return new Promise ((resolve,reject)=>{
         setTimeout(() => {
        if(flag) {
            console.log("User logged out");
            resolve();
        } else {
            reject("Failed to logout");
        }
    }, 3500);
    });
   
}

const flag=true;
async function runAllOperations(){
    try {
    const registerResult = await register(flag);
    console.log(registerResult);
    const welcomeMessageResult = await sendWelcomeMessage(flag);
    console.log(welcomeMessageResult);
    const loginResult = await login(flag);
    console.log(loginResult);
    const profileResult = await fetchProfile(flag);
    console.log(profileResult);
    const statusUpdateResult = await updateStatus(flag);
    console.log(statusUpdateResult);
    const logoutResult = await logout(flag);
    console.log(logoutResult);
    console.log("All operations finished!");
} catch(error) {
        console.error("Error:", error);
    }
}
runAllOperations();