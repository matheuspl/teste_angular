import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-produto-dialog',
  templateUrl: './add-produto-dialog.component.html',
  styleUrls: ['./add-produto-dialog.component.css']
})
export class AddProdutoDialogComponent {

  retorno = {
    produto: '',
    quantidade: null
  }

  constructor(
    public dialogRef: MatDialogRef<AddProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : { produtos : []}
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }
}
