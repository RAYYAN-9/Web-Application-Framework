function register(callback){
    setTimeout(() => {
        console.log("User registered");
        callback();
    }, 2500);   
}

function sendWelcomeMessage(callback){
    setTimeout(() => {
        console.log("Welcome message sent");
        callback();
    }, 3000);
}

function login(callback){
    setTimeout(() => {
        console.log("User logged in");
        callback();
    }, 2000);   
}

function fetchProfile(callback){
    setTimeout(() => {
        console.log("User profile fetched");
        callback();
    }, 4000);    
}

function updateStatus(callback){
    setTimeout(() => {
        console.log("User status updated");
        callback();
    }, 1500);
}

function logout(callback){
    setTimeout(function() {
        console.log("User logged out");
        callback();
    }, 3500);
}


register(() => {
    sendWelcomeMessage(() => {
        login(() => {
            fetchProfile(function() {
                updateStatus(() => {
                    logout(() => {
                        console.log("All operations finished!");
                    });
                });
            });
        });
    });
});


