export interface Pedido {
  id: string;
  dataCadastro: string;
  idCliente: string;
  statusEntrega: string;
  produtos?: [];
}
