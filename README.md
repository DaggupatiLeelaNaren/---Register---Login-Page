# 🔐 Register & Login Page

A simple, modern, and responsive Register and Login application built using **HTML, CSS, and JavaScript**. It provides user registration, login validation, and browser-based authentication using LocalStorage.

## 🚀 Features

- User Registration with Name, Email, and Password.
- User Login with Email and Password.
- Password and Confirm Password validation.
- Email duplication checking.
- Login credential verification.
- Data persistence using LocalStorage.
- Responsive design for desktop and mobile devices.
- Toggle between Register and Login forms.

## 🛠️ Technologies Used

- **HTML5** – Application structure.
- **CSS3** – Styling and responsive design.
- **JavaScript** – Form validation and authentication logic.
- **LocalStorage** – Browser-based data storage.

## 📂 Project Structure

```text
Register-Login/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How to Run

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project folder:

   ```bash
   cd Register-Login
   ```

3. Open `index.html` in your browser.

4. Register a new account and use your credentials to log in.

## 💡 How It Works

1. Users enter their details in the registration form.
2. JavaScript validates the submitted information.
3. Registered user details are stored in browser LocalStorage.
4. During login, the entered credentials are compared with the stored details.
5. A success or error message is displayed based on the validation result.

## 🔒 Security Note

This project is developed for learning and demonstration purposes only. It uses LocalStorage for authentication, and passwords are stored in plain text. It is not suitable for production use.

A secure production application should implement backend authentication, password hashing, and secure session management.

## 🔮 Future Improvements

- Integrate Node.js and Express.js.
- Connect MongoDB for database storage.
- Implement password hashing using bcrypt.
- Add JWT-based authentication.
- Add Forgot Password functionality.
- Implement secure user sessions.

## 👨‍💻 Author

Developed as a frontend development practice project.

---

⭐ If you find this project useful, consider giving it a star!
