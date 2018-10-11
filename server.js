const express = require('express')
const app = express()
const port = 3000
const os = require("os");
const mustacheExpress = require('mustache-express');



app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


app.get('/', (request, response) => {
 response.send('Requête reçue...')
})
app.get('/hello/:name', (request, response) => {
 response.render('hello', {name: request.params.name});
})

app.get('/pooc', (request, response) => {
 response.send('wsh la mif')
})


app.listen(port, (err) => {
 if (err) {
 return console.log('Erreur du serveur : ', err)
 }
    console.log('Le serveur écoute sur le port' + port + 'nRendez vous sur http://'+os.hostname()+'.local:'+port);})

app.use(express.static('public'))
