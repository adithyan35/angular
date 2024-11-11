import { Component, inject } from '@angular/core';
import { SproductServicesService } from '../sproduct-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
data:any;
displayUser: boolean= false;

  private SproductServicesService = inject (SproductServicesService);

  ngOnInit():void{
    this.SproductServicesService.getData().subscribe({
      next:this.sucessState,
      error: (err)=>{
        console.log('server not found',err);
      },
      complete:()=>{
        console.log('this is completed');
      }
      
    })
  }
  sucessState = (state: any)=>{
    console.log('this is from data',state);
    this.data = state;
    this.displayUser=true;
  };
}
