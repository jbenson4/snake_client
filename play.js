const net = require("net");
const { connect } = require('./client');
const { setupInput } = require('./input');

// establishes a connection with the game server

console.log("Connecting ...");
connect();
const rtnObj = connect();
setupInput(rtnObj);
