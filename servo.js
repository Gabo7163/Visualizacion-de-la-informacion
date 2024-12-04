import Arduino from './js/arduino.js';
import Protobject from './js/protobject.js';
import SoundPlayer from './js/soundPlayer.js';
Arduino.start();

const player = new SoundPlayer();

Protobject.onReceived((data) => {
  	if (data.rotacion1){
  		Arduino.contServoWrite({ pin: 5, value: data.rotacion1 });
  		Arduino.contServoWrite({ pin: 6, value: data.rotacion1 });
      	player.setVolume(43);
     	player.play('https://tiarem.github.io/Audio-Infovis/car-crash.mp3');
  	}
  
  	if (data.rotacion2){
  		Arduino.contServoWrite({ pin: 5, value: data.rotacion2 });
  		Arduino.contServoWrite({ pin: 6, value: data.rotacion2 });
      	player.setVolume(64);
     	player.play('https://tiarem.github.io/Audio-Infovis/car-crash.mp3');
  	}
  
  	if (data.rotacion3){
  		Arduino.contServoWrite({ pin: 5, value: data.rotacion3 });
  		Arduino.contServoWrite({ pin: 6, value: data.rotacion3 });
      	player.setVolume(100);
     	player.play('https://tiarem.github.io/Audio-Infovis/car-crash.mp3');
  	}
  
  	if (data.rotacion4){
  		Arduino.contServoWrite({ pin: 5, value: data.rotacion4 });
  		Arduino.contServoWrite({ pin: 6, value: data.rotacion4 });
  	}
});