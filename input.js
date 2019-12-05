const { connect } = require('./client');
let connection;
const stdin = process.stdin;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
// if we hit ctrl^c the program stops
const handleUserInput = (key) => {

  if (key === ('\u0003')) {
    process.exit();
  } else if (key === 'w'){
    connection.write("Move: up");
  } else if (key === 'a'){
    connection.write("Move: left");
  } else if (key === 'd'){
    connection.write("Move: right");
  } else if (key === 's'){
    connection.write("Move: down");
  }
}

const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // handleUserInput(stdin);
  stdin.on('data', handleUserInput);
  return stdin;
}



module.exports = { setupInput };
