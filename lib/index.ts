import { GlobalKeyboardListener } from 'node-global-key-listener';

const listener = new GlobalKeyboardListener();

// Register a global shortcut: Ctrl + Shift + S
listener.addListener((event, down) => {
  console.log({ event, down });
  if (
    event.state === 'DOWN' &&
    down['LEFT CTRL'] &&
    down['LEFT SHIFT'] &&
    event.name === 'S'
  ) {
    console.log('Ctrl + Shift + S was pressed!');
    // Your custom logic here
  }
});

console.log("Starting listener...");
setTimeout(() => {
  console.log('Stopping listener...');
}, 100000);

// // Start the listener
// listener.start();

// // Clean up on exit
// process.on('SIGINT', () => {
//   console.log('Stopping listener...');
//   listener.stop();
//   process.exit();
// });
