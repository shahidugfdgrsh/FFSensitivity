// Check Login Credentials
function checkLogin() {
    var username = document.getElementById("username").value.toLowerCase();
    var password = document.getElementById("password").value;

    if (username === "flamemastergamer" && password === "go10k") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error-msg").innerHTML = "Wrong username or password!";
    }
}

// Sensitivity Settings for Phones
function showSensitivity(phone) {
    var sensitivityData = {
        "ZTE A35": "General: 85, Red Dot: 90, 2x Scope: 80, 4x Scope: 75, AWM Scope: 50",
        "Samsung Galaxy A12": "General: 90, Red Dot: 95, 2x Scope: 85, 4x Scope: 80, AWM Scope: 55",
        "iPhone 13": "General: 100, Red Dot: 100, 2x Scope: 90, 4x Scope: 85, AWM Scope: 60"
    };

    document.getElementById("sensitivity-output").innerHTML = 
        `<h2>${phone} Sensitivity</h2><p>${sensitivityData[phone]}</p>`;
}
