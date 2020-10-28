import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, Subject } from 'rxjs';
import { Cliente } from '../models/Cliente.model';
import { environment } from '../../environments/environment';
import { MessageHandlerService } from './message-handler.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = `${environment.apiUrl}/clientes`;
  cliente : Cliente;
  private pendenteSource = new Subject<string>();
  private clienteSource = new Subject<string>();
  pendente$ = this.pendenteSource.asObservable();
  clienteSource$ = this.clienteSource.asObservable();

  constructor(
    private http: HttpClient,
    private messageHandlerService: MessageHandlerService
  ) { }

  read(filtroStatus : string = null, ordem : string = null) : Observable<Cliente[]> {
    let
      url = this.baseUrl;

    if(!!filtroStatus) {
      url += `?status=${filtroStatus}`;
    }
    if(!!ordem) {
      let query = environment.jsonServer ? `_sort=${ordem}` : `ordem=${ordem}`;
      url += !!filtroStatus ? `&` : `?`;
      url += query;
    }

    return this.http.get<Cliente[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }

  salvar(cliente : Cliente) : void {
    this.pendenteSource.next(JSON.stringify(cliente));
  }

  carregarCliente(cliente : Cliente) : void {
    this.clienteSource.next(JSON.stringify(cliente));
  }

  create(cliente: Cliente) : Observable<Cliente> {
    cliente['data-cadastro'] = new Date().toLocaleDateString();
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }

  readById(id : string) : Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }

  update(cliente: Cliente) : Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }
}
