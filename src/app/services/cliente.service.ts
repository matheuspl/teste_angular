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
  pendente$ = this.pendenteSource.asObservable();

  constructor(
    private http: HttpClient,
    private messageHandlerService: MessageHandlerService
  ) { }

  read() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }

  salvar(cliente : Cliente) : void {
    this.pendenteSource.next(JSON.stringify(cliente));
  }

  create(cliente: Cliente) : Observable<Cliente> {
    cliente['data-cadastro'] = new Date().toLocaleDateString();
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }
}
