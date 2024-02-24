const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3002;
app.listen(port, function () {
    console.log('Servidor Levantado');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
