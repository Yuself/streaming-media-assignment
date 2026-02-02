const fs = require('fs');
const path = require('path');

const client1 = fs.readFileSync(path.join(__dirname, '../client/client1.html'));
const client2 = fs.readFileSync(path.join(__dirname, '../client/client2.html'));
const client3 = fs.readFileSync(path.join(__dirname, '../client/client3.html'));

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(client1);
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(client2);
  response.end();
};

const getPage3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(client3);
  response.end();
};

module.exports = {
  getIndex,
  getPage2,
  getPage3,
};
