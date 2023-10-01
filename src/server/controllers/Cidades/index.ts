// Importo todos os elementos dentro da controller
import * as create from './Create';



export const CidadeController = {
  // Utiliza-se o spread operator para conseguir acessar todos os elementos exportados da controller
  ...create,
};