import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lerning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lerning.component.html',
  styleUrl: './lerning.component.css',
})
export class LerningComponent implements OnInit {
  agents!: Observable<string>;
  agentName !: string;
  name='';
  das:any;

  ngOnInit(): void {
    this.agents = new Observable(
      function(observer){
        try{
          setTimeout(()=>{
            observer.next('adithyan')
          },2000);
          setTimeout(()=>{
            observer.next('priya')
          },4000);
          setTimeout(()=>{
            observer.next('rithvik')
          },6000);
          
        }
        catch(e){
          console.log(e)
        }
      }
    );
    this.agents.subscribe((data)=>{
      this.agentName= data;
    })
  }
getdata(e:any){
  this.name= e.target.value;
  console.log(this.name);
  
}
displaydata(){
  this.das =this.getdata('e');
}

}
