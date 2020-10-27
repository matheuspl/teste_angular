import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto.model';
import { environment } from '../../environments/environment';
import { MessageHandlerService } from './message-handler.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = `${environment.apiUrl}/produtos`;

  constructor(
    private http: HttpClient,
    private messageHandlerService: MessageHandlerService
  ) { }

  read() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.messageHandlerService.errorHandler(e))
    );
  }

}
