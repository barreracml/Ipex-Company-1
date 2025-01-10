const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/contacto', (req, res) => {
  res.sendFile(__dirname + '/public/contacto.html');
});

app.get('/dosesis', (req, res) => {
    res.sendFile(__dirname + '/public/dosesis.html');
  });

app.get('/logistica', (req, res) => {
    res.sendFile(__dirname + '/public/logistica.html');
  });

app.get('/floydride', (req, res) => {
    res.sendFile(__dirname + '/public/floydride.html');
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
