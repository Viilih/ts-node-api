import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';
import {CidadeController} from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});
router.post('/cidades', CidadeController.create);
export { router };