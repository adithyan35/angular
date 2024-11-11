import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {
user= {id:1, name: 'adhi' , age:30}
uservariable$: any;
currentStatus:any;

  ngOnInit(){
    this.uservariable$ = of (this.user);
    console.log('this is from obervable',this.uservariable$);

    new Observable(item=>{

      setTimeout(()=>{
        item.next('this is in progess...');
      },2000);
      setTimeout(()=>{
        item.next('status pending.....');
      },4000);
      setTimeout(()=>{
        item.next('this is completed ....');
      },6000);
    }).subscribe((result)=>{
      this.currentStatus= result;
      console.log(result);
      
    })
  }
}
