import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente.model';
import { environment } from '../../environments/environment';
import { MessageHandlerService } from './message-handler.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = `${environment.apiUrl}/clientes`;

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
}
