import { Request, Response } from 'express';

interface ICidade {
  nome: string
}

// Os type parameters passados na request ajudam a especificar algumas tipagens: nesse caso o terceiro parametro é o body
export const create = (req: Request<{},{},ICidade>,res: Response) =>{
  const data : ICidade = req.body; 
  console.log(data);
  return res.send('Create!');
};