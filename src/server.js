//importar dependencia (biblioteca)
const express = require('express');

const path = require('path');
const pages = require('./pages.js');

//criar uma rota - iniciando o express
const server = express();

server
//utilizar body do request
.use(express.urlencoded({extended:true}))

//utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//criar uma rota request, response
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage);

//ligar o servidor
server.listen(5500, () => {
    console.log("Server started");
});