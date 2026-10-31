
const authForm = document.getElementById("authForm");

const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");

const nameGroup = document.getElementById("nameGroup");
const confirmGroup = document.getElementById("confirmGroup");

const submitBtn = document.getElementById("submitBtn");
const switchBtn = document.getElementById("switchBtn");
const switchMessage = document.getElementById("switchMessage");

const message = document.getElementById("message");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

let isLogin = false;

// Switch between Register and Login
switchBtn.addEventListener("click", function (event) {
    event.preventDefault();

    isLogin = !isLogin;

    message.textContent = "";
    authForm.reset();

    if (isLogin) {
        formTitle.textContent = "Welcome Back";
        formSubtitle.textContent = "Login to your account";

        nameGroup.classList.add("hidden");
        confirmGroup.classList.add("hidden");

        submitBtn.textContent = "Login";
        switchMessage.textContent = "Don't have an account?";
        switchBtn.textContent = "Register";

        nameInput.required = false;
        confirmPasswordInput.required = false;

    } else {
        formTitle.textContent = "Create Account";
        formSubtitle.textContent = "Register to get started";

        nameGroup.classList.remove("hidden");
        confirmGroup.classList.remove("hidden");

        submitBtn.textContent = "Register";
        switchMessage.textContent = "Already have an account?";
        switchBtn.textContent = "Login";

        nameInput.required = true;
        confirmPasswordInput.required = true;
    }
});

// Form submission
authForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!isLogin) {

        // Registration validation
        if (password.length < 6) {
            showMessage("Password must contain at least 6 characters", "error");
            return;
        }

        if (password !== confirmPassword) {
            showMessage("Passwords do not match!", "error");
            return;
        }

        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            showMessage("Email already registered!", "error");
            return;
        }

        users.push({
            name: name,
            email: email,
            password: password
        });

        localStorage.setItem("users", JSON.stringify(users));

        showMessage("Registration successful!", "success");

        authForm.reset();

    } else {

        // Login validation
        const user = users.find(user =>
            user.email === email && user.password === password
        );

        if (user) {
            showMessage("Login successful! Welcome " + user.name, "success");
            authForm.reset();
        } else {
            showMessage("Invalid email or password!", "error");
        }
    }
});

// Display messages
function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}
