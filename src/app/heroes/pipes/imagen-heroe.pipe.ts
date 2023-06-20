import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagenHeroe'
})
export class ImagenHeroePipe implements PipeTransform {

  heroeImage:string='';
  transform(heroe:Heroe): string {
    this.heroeImage = `../../../../assets/heroes/${heroe.id}.jpg`;

    if(!heroe.id && !heroe.alt_img){
      return '../../../assets/no-image.png';
    }
    else if(heroe.alt_img){
      return heroe.alt_img;
    }
    else{
      return this.heroeImage;
    }
  }

}
