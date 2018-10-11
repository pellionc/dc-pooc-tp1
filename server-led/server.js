const express = require('express')
const app = express()
const port = 3000
const os = require("os");
const mustacheExpress = require('mustache-express');



app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'))

app.get('/on', (request, response) => {
const Gpio = require('onoff').Gpio;
const sleep = require('sleep');
//Création d'une variable qui va nous permettre d'accéder à un GPIO du raspberry  
//⚠Le nombre passé en paramètre correspond au numéro de GPIO et non au numéro de la pin.
const led = new Gpio(17, 'out');

console.log('Led On');
//On indique à la pin GPIO 4 que l'on veut envoyer du courant sur celle-ci
led.writeSync(1);
 response.render('on')
})

app.get('/off', (request, response) => { 
const Gpio = require('onoff').Gpio;
const sleep = require('sleep');
//Création d'une variable qui va nous permettre d'accéder à un GPIO du raspberry  
//⚠Le nombre passé en paramètre correspond au numéro de GPIO et non au numéro de la pin.
const led = new Gpio(17, 'out');

console.log('Led On');
//On indique à la pin GPIO 4 que l'on veut envoyer du courant sur celle-ci
led.writeSync(0);
 response.render('off')
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
    console.log('Le serveur écoute sur le port' +port+ '\nRendez vous sur http://'+os.hostname()+'.local:'+port);})

