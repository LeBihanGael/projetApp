const expres = require('express');
const app = expres();

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
