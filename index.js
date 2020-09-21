const fs = require('fs');

require('howler');

const sound = new Howl({
  src: ['Music_Box.mp3']
});

const INTERVAL = 60 * 60 * 1000;

const notify = async () => {
  const notification = new Notification('Check-in', {
    'body': 'What are you doing right now?',
  });
  sound.play();
}

const timer = (ms) => {
  return new Promise(res => setTimeout(res, ms));
}

const run = async () => {
  while (true) {
    await timer(INTERVAL);
    notify();
  }
}

run();

document.getElementById('form').onsubmit = () => {
  const date = new Date()
  const content = date + '\nWhat are you doing right now?\n' +
  document.getElementById('task').value + 
  '\nHow do you feel right now?\n' + 
  document.getElementById('feel').value + '\n\n';
  fs.appendFile('logs.txt', content, (err) => {
    if (err) throw err;
    console.log('File saved!');
  });
}