const { connect } = require('./client');
console.log('Connecting ...');
const stdin = process.stdin;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
// if we hit ctrl^c the program stops
const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === ('\u0003')) {
      process.exit();
    }
  })
}

const setupInput = function(callback) {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  callback(stdin);
  return stdin;
}


connect();
setupInput(handleUserInput);
