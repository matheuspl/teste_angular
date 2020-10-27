import { ProdutoPedido } from './ProdutoPedido';
import { Cliente } from './Cliente.model';

export interface Pedido {
  id: string;
  dataCadastro: string;
  idCliente: string;
  cliente?: Cliente;
  statusEntrega: string;
  produtos?: ProdutoPedido[];
  total?: number;
}
