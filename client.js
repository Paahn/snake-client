const net = require('net');
const { IP, PORT } = require('./constants')

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // conn.on('connect', () => {
  //   console.log("Successfully connected to game server")
  //   conn.write("Name: PAN")
  // })
  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: up")
  //   }, 100)
  // })
  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: up")
  //   }, 300)
  // })
  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: up")
  //   }, 500)
  // })
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 100)
  // })
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', data => {
    console.log('Server says: ', data);
  });

  return conn;
}

// console.log('Connecting ...');
// connect();
module.exports = { connect };
