const express = require('express');
const app = express();
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: '172.29.18.122', //localhost si votre node est sur la meme VM que votre Bdd
  user: 'accessNodeDemo',
  password: 'accessNodeDemo',
  database: 'BDD demo server'
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL.');  
});

app.use(express.static('public'));
app.use(express.json());

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>');
});

app.get('/info', (req, res) => {
  res.json({ cle1: 'Hello World', cle2: 'valeur2' });
});


app.post('/register', (req, res) => {
    console.log('Données reçues');
    console.log(req.body);
        res.json({ message: 'Données reçues avec succès' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
