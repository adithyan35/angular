import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { CustomeSubscriberComponent } from '../custome-subscriber/custome-subscriber.component';

@Component({
  selector: 'app-custome-observable',
  standalone: true,
  imports: [],
  templateUrl: './custome-observable.component.html',
  styleUrl: './custome-observable.component.css'
})
export class CustomeObservableComponent {
  users =[
    {id:'1' , name:'adhi' , age:'30'},
    {id:'2' , name:'priya' , age:'30'},
    {id:'3' , name:'rithvik' , age:'1'}
  ]

  constructor(){
    // const user$ = new Observable((observer)=>{
      // observer.next(this.users);
      // observer.next(1);
      // observer.next(2);
      // observer.next(3);
      // observer.next(4);
      // observer.complete();
      // observer.next(5);
     
//////////from method/////////

// this.users.forEach((user)=>{
// observer.next(user);
// })
//     });

//     user$.subscribe(
//       {
//         next:(users)=>{
//       console.log('this is for user',users)
//     },
//     complete:()=>{
//       console.log('this is completed')
//     }
//   })



///this is for common customer subscribe we create a common shared observer////
console.log(1);
const number$ =from ([1,2,3,4,5,6]);
number$.subscribe(new CustomeSubscriberComponent());
console.log(2);
  }
}
