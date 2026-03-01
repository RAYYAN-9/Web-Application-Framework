function register(){
    setTimeout(() => {
        console.log("User registered");
    }, 2500);   
}

function sendWelcomeMessage(){
    setTimeout(() => {
        console.log("Welcome message sent");
    }, 3000);
}

function login(){
    setTimeout(() => {
        console.log("User logged in");
    }, 2000);   
}

function fetchProfile(){
    setTimeout(() => {
        console.log("User profile fetched");
    }, 4000);    
}

function updateStatus(){
    setTimeout(() => {
        console.log("User status updated");
    }, 1500);
}

function logout(){
    setTimeout(() => {
        console.log("User logged out");
    }, 3500);
}


register();
sendWelcomeMessage();
login();        
fetchProfile();
updateStatus();
logout();
console.log("All operations finished!");

