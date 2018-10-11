const Gpio = require('onoff').Gpio;
const sleep = require('sleep');
//Création d'une variable qui va nous permettre d'accéder à un GPIO du raspberry  
//⚠Le nombre passé en paramètre correspond au numéro de GPIO et non au numéro de la pin.
const led = new Gpio(17, 'out');

console.log('Led On');
//On indique à la pin GPIO 4 que l'on veut envoyer du courant sur celle-ci
led.writeSync(1);
//On demande au script d'attendre 5 secondes
sleep.sleep(5);
//On dit à la pin GPIO 4 d'arrêter d'envoyer du courant.
led.writeSync(0);
console.log('Led Off');

//On indique qu'on a fini d'utiliser la pin GPIO 4.
led.unexport();
