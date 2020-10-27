import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageHandlerService {

  constructor(private snackbar: MatSnackBar) { }

  showMessage(msg: string, isError : boolean = false) : void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  errorHandler(erro : any) : Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  }
}
