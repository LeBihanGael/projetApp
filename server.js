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

connection.query(
  'INSERT INTO User (login, password) VALUES (?, ?)',
  [req.body.login, req.body.password],
  (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'insertion dans la base de données :', err);
      res.status(500).json({ message: 'Erreur serveur' });
      return;
    }
    console.log('Insertion réussie, ID utilisateur :', results.insertId);
    res.json({ message: 'Inscription réussie !', userId: results.insertId });
  }
);
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
