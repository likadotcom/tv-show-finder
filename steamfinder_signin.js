const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const signInMessage = document.getElementById("signInMessage");
const signInBtn = document.getElementById("signInBtn");

let username = "lika";
let password = "lika1234";

function attemptSignIn() {
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (username === "" || password === "") {
        signInMessage.textContent = "Please enter both username and password.";
    } else if (username === "lika" && password === "lika1234") {
        location.href = "steamfinder_index.html";
        localStorage.setItem("loggedIn", "true");
    }
    else if (password.length < 8) {
        signInMessage.textContent = "Password must be at least 8 characters long.";
        passwordInput.addEventListener("keydown", function () {
            const password = passwordInput.value;
            if (password.length > 8) {
                signInMessage.textContent = "";
            }
        });
    }
    else {
        signInMessage.textContent = "Wrong credentials. Please try again.";
    }
}

signInBtn.addEventListener("click", attemptSignIn)
passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        attemptSignIn();
    }
});