'use strict';

const {
  createServer
} = require('./server');

const PORT = 5001;

createServer().listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
