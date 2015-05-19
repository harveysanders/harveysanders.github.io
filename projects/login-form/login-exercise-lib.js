(function(){
    var login;
    
    login = function(username, password) {
        var success, statusMessage;
        success = password === username;
        if(success) {
            statusMessage = "logged in successfully";
        } else {
            statusMessage = "login failed";
        }
        console.log("User", username, statusMessage);
        return success;
    }
    
    window.loginApp = {
        
        // A function that will return true if the username matches the password
        // and false otherwise
        // USAGE:
        //  var result = window.loginApp.login(username, password);
        login: login
    };
}).call();