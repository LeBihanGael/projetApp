const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>');
});

app.post('/register', (req, res) => {
    res.send('Register Page');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
