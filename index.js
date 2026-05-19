const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the login HTML page automatically directly on http://localhost:3000/login.html
app.get('/login.html', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head><title>Login</title></head>
        <body>
            <form action="/login" method="POST">
                <input id="username" name="username" type="text" />
                <input id="password" name="password" type="password" />
                <button type="submit">Login</button>
            </form>
            <div id="msg"></div>
        </body>
        </html>
    `);
});

// Handle authentication and display the expected message text directly on screen
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    let message = "";
    if (!username || !password || username.length <= 3 || password.length <= 5) {
        message = "Username length must be greater than 3 & Password 5";
    } else if (username === 'admin123' && password === 'admin123') {
        message = "Login successful";
    } else {
        message = "Invalid credentials";
    }

    // Return a page with the message inside the #msg container for Playwright to read
    res.send(`
        <!DOCTYPE html>
        <html>
        <body>
            <div id="msg">${message}</div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Backend server is successfully running on http://localhost:${PORT}`);
});