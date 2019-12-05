const { connect } = require('./client');
console.log('Connecting ...');
const stdin = process.stdin;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
// if we hit ctrl^c the program stops
const handleUserInput = (key) => {

  if (key === ('\u0003')) {
    process.exit();
  }
}

const setupInput = function () {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // handleUserInput(stdin);
  stdin.on('data', handleUserInput);
  return stdin;
}


connect();
setupInput(handleUserInput);
module.exports = { setupInput };
