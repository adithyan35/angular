import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-next-err-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './next-err-rxjs.component.html',
  styleUrl: './next-err-rxjs.component.css'
})
export class NextErrRxjsComponent {
  
  users =[
    {id:'1' , name:'adhi' , age:'30'},
    {id:'2' , name:'priya' , age:'30'},
    {id:'3' , name:'rithvik' , age:'1'}
  ]
  
  constructor(){
    const messagePromise  =new Promise((resolve,reject)=>{
      setTimeout(()=>{
        reject('promise resolved')
      },1000);
    });
  
    const message$ =from(messagePromise);
  
    message$.subscribe({
      next:(users)=>{
      console.log('this is from meaagae', users)
    },
    error:(err)=>{
      console.log('serrver error occured')
    }
  
  })
  }


}
