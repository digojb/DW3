const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Página Principal' });
});

app.get('/manutSalaDeAula', (req, res) => {
    const salas = [
        { id: 1, descricao: 'Sala 101', localizacao: 'Bloco A', capacidade: 30, removido: false },
        { id: 2, descricao: 'Sala 102', localizacao: 'Bloco B', capacidade: 25, removido: true },
        { id: 3, descricao: 'Sala 103', localizacao: 'Bloco C', capacidade: 35, removido: false }
    ];
    res.render('manutSalaDeAula', { salas });
});

app.listen(25000, () => {
    console.log('Servidor EJS rodando na porta 25000');
});
