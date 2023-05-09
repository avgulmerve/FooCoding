'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here
    if (request.method === 'GET' && request.url === '/state') {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({state}));
    } else if (request.method === 'GET' && request.url === '/add') {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      state = state + 1;
      response.end(JSON.stringify({state}));
    } else if (request.method === 'GET' && request.url === '/subtract') {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      state = state - 1;
      response.end(JSON.stringify({state}));
    }else if (request.method === 'GET' && request.url === '/reset') {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      state = 10;
      response.end(JSON.stringify({state}));
    }else {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ error: 'Not found' }));
    }

  });
  return server;
}

module.exports = {
  createServer
};
