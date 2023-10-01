import express from 'express';
// Autoexecutar a lib e utilizar as variáveis de ambiente
import 'dotenv/config';
import { router } from './routes';
const server = express();

// Tem que estar antes do use(router)
server.use(express.json());
server.use(router);
export { server };
