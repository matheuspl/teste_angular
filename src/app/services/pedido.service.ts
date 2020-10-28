import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageHandlerService } from './message-handler.service';
import { Pedido } from '../models/Pedido.model';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  baseUrl = `${environment.apiUrl}/pedidos`;
  urlClientes = `${environment.apiUrl}/clientes`;

  constructor(
    private http: HttpClient,
    private messageHandlerService: MessageHandlerService
  ) { }

  read(statusEntregaFilter : string = null) : Observable<Pedido[]> {
    let url = this.baseUrl;
    if(!!statusEntregaFilter) {
      url += `?status-entrega=${statusEntregaFilter}`;
    }

    return this.http.get<Pedido[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }

  create(pedido : Pedido) : Observable<Pedido> {
    const url = `${this.urlClientes}/${pedido.idCliente}/pedidos`;
    pedido['data-cadastro'] = new Date().toLocaleString();
    pedido['status-entrega'] = pedido.statusEntrega;
    delete pedido.statusEntrega;

    return this.http.post<Pedido>(
      this.getPedidoClienteUrl(pedido.idCliente),
      pedido
    ).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }

  readByClienteId(clienteId : string) : Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.getPedidoClienteUrl(clienteId)).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }

  private getPedidoClienteUrl(clienteId) : string {
    return `${this.urlClientes}/${clienteId}/pedidos`;
  }
}
