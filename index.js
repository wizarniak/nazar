const INTERVAL = 60 * 60 * 1000;

const notify = async () => {
  new Notification('Check-in', {
    'body': 'What are you doing right now?',
  });
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