import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtSearch') txtSearchCriteria!: ElementRef<HTMLInputElement>;

  search()
  {
    const searchCriteria = this.txtSearchCriteria.nativeElement.value
    if(searchCriteria){
      this.service.search(searchCriteria);
    }
    
    this.txtSearchCriteria.nativeElement.value = '';
  }

  constructor(private service: GifsService) { } 

}
