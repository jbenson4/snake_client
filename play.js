const net = require("net");
const { connect } = require('./client');
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on('data', handleUserInput)

  return stdin;
};

// establishes a connection with the game server

console.log("Connecting ...");
connect();
setupInput();