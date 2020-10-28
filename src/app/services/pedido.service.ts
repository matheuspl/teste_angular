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
    const
      jsonServerUrl = `${environment.apiUrl}/cliente/${pedido.idCliente}/pedidos`,
      url = environment.jsonServer ? this.baseUrl : jsonServerUrl;

    return this.http.post<Pedido>(url, pedido).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }

  readByClienteId(clienteId : string) : Observable<Pedido[]> {
    let url = `${environment.apiUrl}/clientes/${clienteId}/pedidos`;
    console.log(url);

    return this.http.get<Pedido[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }
}
