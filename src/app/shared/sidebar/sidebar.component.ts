import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get searchs(): string[]
  {
    return this.service.historicalData;
  }

  constructor(private service: GifsService) { }

  ngOnInit(): void {
  }

  search(criteria:string):void{
     this.service.search(criteria);
  }
}
