const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.html', { title: 'Página Principal' });
});

app.get('/manutSalaDeAula', (req, res) => {
  const salas = [
    { id: 1, descricao: 'Sala 101', localizacao: 'Bloco A', capacidade: 30, removido: false },
    { id: 2, descricao: 'Sala 102', localizacao: 'Bloco B', capacidade: 25, removido: true },
    { id: 3, descricao: 'Sala 103', localizacao: 'Bloco C', capacidade: 25, removido: false }
  ];
  res.render('manutSalaDeAula.html', { salas });
});

app.listen(26000, () => {
  console.log('Servidor Nunjucks rodando na porta 26000');
});
