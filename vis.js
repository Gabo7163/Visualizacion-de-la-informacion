import Protobject from './js/protobject.js';
import Button from './js/button.js';

const button1 = new Button({
    text: '2012',
    style: {
        backgroundColor: 'yellow',
        color: 'black',
        padding: '5px 5px',
      	position: 'absolute',
        top: '50px',
        left: '120px',
      	width: '150px',
      	height: '80px',
    }
});

const button2 = new Button({
    text: '2018',
    style: {
        backgroundColor: 'orange',
        color: 'black',
        padding: '5px 5px',
      	position: 'absolute',
        top: '190px',
        left: '120px',
      	width: '150px',
      	height: '80px',
    }
});

const button3 = new Button({
    text: '2023',
    style: {
        backgroundColor: 'red',
        color: 'black',
        padding: '5px 5px',
      	position: 'absolute',
        top: '330px',
       	left: '120px',
      	width: '150px',
      	height: '80px',
    }
});

const button4 = new Button({
    text: 'Stop',
    style: {
        backgroundColor: 'blue',
        color: 'white',
        padding: '5px 5px',
      	position: 'absolute',
        top: '470px',
       	left: '120px',
      	width: '150px',
      	height: '80px',
    }
});

button1.onPressed(() => console.log('Button pressed'));
button1.onPressed(() => Protobject.send({ rotacion1: 400 }).to('servo.js'));

button2.onPressed(() => console.log('Button pressed'));
button2.onPressed(() => Protobject.send({ rotacion2: 610 }).to('servo.js'));

button3.onPressed(() => console.log('Button pressed'));
button3.onPressed(() => Protobject.send({ rotacion3: 900 }).to('servo.js'));

button4.onPressed(() => console.log('Button pressed'));
button4.onPressed(() => Protobject.send({ rotacion4: 1 }).to('servo.js'));