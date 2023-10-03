import * as yup from "yup";
import { Request, Response } from 'express';

interface ICidade {
  nome: string,
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
})
// Os type parameters passados na request ajudam a especificar algumas tipagens: nesse caso o terceiro parametro é o body
export const create = async (req: Request<{},{},ICidade>,res: Response) =>{
  let validateTData: ICidade | undefined = undefined
  try {
    validateTData = await bodyValidation.validate(req.body);
    
  } catch (error) {
    const yupError = error as yup.ValidationError;
    return res.json({
      errors: {
        default: yupError.message
      }
    });
    
  }
  return res.send('Create!');
};