import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {
  heroes:string[] = ['peter', 'martin', 'leudys', 'alejandra', 'camila'];
  heroeBorrado:string ='';
  borrarHeroe(){
    this.heroeBorrado  = this.heroes.shift() || '';
    
  }

}
