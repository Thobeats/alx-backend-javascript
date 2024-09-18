const { stdin, stdout } = require('node:process');

stdout.write('Welcome to Holberton School, what is your name?\n');

stdin.on('readable', () => {
  const response = stdin.read();
  if (response !== null) {
    stdout.write(`Your name is: ${response}`);
  }
});

stdin.on('end', () => {
  stdout.write('This important software is now closing\n');
});
