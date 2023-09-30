import express from 'express';
const server = express();

server.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});
export { server };
