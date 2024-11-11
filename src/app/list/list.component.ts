import { Component, inject } from '@angular/core';
import { TestservicesService } from '../testservices.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
data$:any;

private TestservicesService = inject (TestservicesService)
  constructor(){}

ngOnInit(){
  this.getData();
  this.TestservicesService.Refershrequired.subscribe(Response=>{
    this.getData();
  })
}

  getData(){
    this.TestservicesService.getApi().subscribe(result=>{
      this.data$= result;
    });

    
  }
}
