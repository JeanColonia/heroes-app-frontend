import { Heroe } from './../../../interfaces/heroes.interface';
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Heroe) { }

  ngOnInit(): void {

    console.log(this.data)
  }


  borrar(){
    this.dialogRef.close(true);
  }


  cerrar(){

    this.dialogRef.close();
  }

}
