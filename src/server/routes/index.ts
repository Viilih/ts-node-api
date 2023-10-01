import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});
router.post('/teste', (req, res) => {
  // Ao enviar JSON utilizar o método JSON
  res.status(StatusCodes.UNAUTHORIZED).json(req.query);
});
export { router };