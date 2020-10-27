import { Produto } from './Produto.model';

export interface ProdutoPedido {
  produto: Produto;
  quantidade: number;
}
