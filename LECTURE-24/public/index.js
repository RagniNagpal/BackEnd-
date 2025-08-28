// Signup Feature
let signupForm = document.querySelector("#signup-form");
let signupEmail = document.querySelector("#signup-email");
let signupUsername = document.querySelector("#signup-username");
let signupPassword = document.querySelector("#signup-password");

signupForm.addEventListener("submit", async function(e) {
    console.log("Error checking");
    e.preventDefault();
    let emailValue = signupEmail.value;
    let usernameValue = signupUsername.value;
    let passwordValue = signupPassword.value;
    let response = await fetch("/users", {
        method: "POST",
        body: JSON.stringify({email:emailValue, username:usernameValue, password:passwordValue}),
        headers: {
            "content-type": "application/json"
        }
    })
    let data = await response.json();
    console.log(data);
    if(data.success) {
        alert("Signup success" + " " + data.data.username);  // Yahan pe 2 baari data data isliye likha hai kyuki ke ek toh is code wala data hai or ek joh humne inspect pe kara tha vahan pe data aaya tha 
        signupForm.reset();
    }
});

// Login Feature
let loginForm = document.querySelector("#login-form");
let loginEmail = document.querySelector("#login-email");
let loginPassword = document.querySelector("#login-password");

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    let emailValue = loginEmail.value;
    let passwordValue = loginPassword.value;
    let response = await fetch("/users/login", {
        method: "POST",
        body: JSON.stringify({email:emailValue, password:passwordValue}),
        headers: {
            "content-type": "application/json"
        }
    })
    let data = await response.json();
    console.log(data);
    if(data.success) {
        let token = data.token;
        localStorage.setItem("token", token);
        alert("Login successfull")
    }
})