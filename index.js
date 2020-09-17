require("howler");

const sound = new Howl({
  src: ['Music_Box.mp3']
});

const INTERVAL = 60 * 60 * 1000;

const notify = async () => {
  new Notification('Check-in', {
    'body': 'What are you doing right now?',
  });
  sound.play();
}

const timer = (ms) => {
  return new Promise(res => setTimeout(res, ms));
}

const run = async () => {
  while (true) {
    notify();
    await timer(INTERVAL);
  }
}

run();