// THIS IS THE CLAP
const play = document.getElementById('play');
const clap = document.getElementById('clap');

play.addEventListener('click', () => {
    clap.play();
});

// THIS IS THE BOOM
const play2 = document.getElementById('play2');
const boom = document.getElementById('boom');

play2.addEventListener('click', () => {
    boom.play();
});

// THIS IS THE HIHAT
const play3 = document.getElementById('play3');
const hihat = document.getElementById('hihat');

play3.addEventListener('click', () => {
    hihat.play();
});

// THIS IS THE KICK
const play4 = document.getElementById('play4');
const kick = document.getElementById('kick');

play4.addEventListener('click', () => {
    kick.play();
});

// THIS IS THE OPEN-HAT
const play5 = document.getElementById('play5');
const openhat = document.getElementById('openhat');

play5.addEventListener('click', () => {
    openhat.play();
});

// THIS IS THE RIDE
const play6 = document.getElementById('play6');
const ride = document.getElementById('ride');

play6.addEventListener('click', () => {
    ride.play();
});

// THIS IS THE SNARE
const play7 = document.getElementById('play7');
const snare = document.getElementById('snare');

play7.addEventListener('click', () => {
    snare.play();
});

// THIS IS THE TINK
const play8 = document.getElementById('play8');
const tink = document.getElementById('tink');

play8.addEventListener('click', () => {
    tink.play();
});

// THIS IS THE TOM
const play9 = document.getElementById('play9');
const tom = document.getElementById('tom');

play9.addEventListener('click', () => {
    tom.play();
});

// KEYBOARD MAPPING FOR SAMPLE TRIGGERING

const keyToSoundMap = {
    'a': 'clap',
    's': 'boom',
    'd': 'hihat',
    'f': 'kick',
    'w': 'openhat',
    'e': 'ride',
    'r': 'snare',
    'x': 'tink',
    'c': 'tom',
};

function playSound(drum){
    const sound = document.getElementById(`${drum}-sound`);
    sound.currentTime=0;
    sound.play();
}

document.addEventListener('keydown', function(event){
    const drum = keyToSoundMap[event.key];
    if(drum){
        playSound(drum)
    }  
});

// document.addEventListener('keydown', function(event){
//     switch(event.key) {
//         case 'a':
//             playSound('clap');
//             break;
//         default:
//             break
//     }
//         });


// function playSound(drum){
//     const sound = document.getElementById('boom');
//     sound.currentTime=0;
//     sound.play();
// }

// document.addEventListener('keydown', function(event){
//     switch(event.key) {
//         case 's':
//             playSound('boom');
//             break;
//         default:
//             break
//     }
//         });