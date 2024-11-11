import { Component } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-custome-subscriber',
  standalone: true,
  imports: [],
  templateUrl: './custome-subscriber.component.html',
  styleUrl: './custome-subscriber.component.css'
})
export class CustomeSubscriberComponent implements Observer<number> {

  next(data:number){
    console.log('this is for next:',data);
  }
  error(err:string){
    console.log('this is for err:',err);
  }
  complete(){
    console.log('this is for complete:');
  }
}
