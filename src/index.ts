import { server } from './server/Server';

server.listen(process.env.PORT || 5000, () => {
  console.log(`App rodando na porta ${process.env.PORT || 5000}`);
});
