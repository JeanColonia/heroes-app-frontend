import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/matDialog/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {


  publishers=[
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    }
  ];

  heroe:Heroe={
    superhero:'',
    alter_ego:'',
    first_appearance:'',
    characters:'',
    alt_img:'',
    publisher:Publisher.DCComics,

  }
  constructor(private heroeService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router, private snackbar:MatSnackBar, private dialog:MatDialog) { }

  ngOnInit(): void {

 if(!this.router.url.includes('editar')){
  return;
 }

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.heroeService.getHeroeById(id))
    )
    .subscribe(
      heroe =>{
        this.heroe = heroe;
      }
    );
  }


  guardar(){

    if(this.heroe.superhero.trim().length ===0){
      return;
    }

if(this.heroe.id){
  this.heroeService.actualizarHeroe(this.heroe).subscribe(
    (res) =>    this.mostrarMatSnack('Información del heroe actualizada con exito!')
  );

}
else{
  this.heroeService.guardarHeroe(this.heroe).subscribe(
    heroe =>{

      this.router.navigate(['/heroes/editar/', heroe.id]);
      this.mostrarMatSnack('Heroe añadido con exito');
    },
    error =>{
      console.error(error);
    }
  );
}

  }



  borrarHeroe(){

    const dialogData = this.dialog.open(ConfirmarComponent, {
      width:'300px',
      data:this.heroe
    });


    dialogData.afterClosed().subscribe(
      (result)=>{

        if(result){
          this.heroeService.eliminarHeroe(this.heroe.id!).subscribe(
            (res)=>{
              this.router.navigate(['heroes/listado']);
              this.mostrarMatSnack('Heroe Eliminado');
            }
          );
        }
      }
    );

  }


  mostrarMatSnack(mensaje:string){

    this.snackbar.open(mensaje, '', {
      duration:2500,
    });
  }
}
