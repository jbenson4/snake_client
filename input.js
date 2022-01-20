let connection;
const handleUserInput = (data) => {
  const moveObj = {
    w: 'Move: up',
    a: 'Move: left',
    s: 'Move: down',
    d: 'Move: right'
  }
  if (data === '\u0003') {
    process.exit();
  }
  for (const letter in moveObj) {
    if (data === letter) connection.write(moveObj[letter]);
  }
};
const setupInput = conn => {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on('data', handleUserInput)

  return stdin;
};

module.exports = {
  setupInput,
}