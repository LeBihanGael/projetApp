const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>');
});

app.get('/info', (req, res) => {
  res.json({ cle1: 'valeur1', cle2: 'valeur2' });
});


app.post('/register', (req, res) => {
    console.log('Données reçues');
    console.log(req.body);
        res.json({ message: 'Données reçues avec succès' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
