import { Component, input, ViewChild, viewChild  } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent) viewdata !:ChildComponent;


  constructor(private service:MasterService){
    sessionStorage.setItem("name","adithyan");
  }
  title = 'angular-learn';

  data="angular-parent-to-child from parent";
  data1="hi this is adithyan";
  
  inputname='';
  inputmark='';
  inputdep='';
inputobj={"name":"","mark":"","dep":""};
response:any;

  transferData(name:any,mark:any,dep:any){
    // this.inputname=name;
    // this.inputmark=mark;
    // this.inputdep=dep;
    this.inputobj={"name":name,"mark":mark,"dep":dep}
    // this.response = this.viewdata.updatelist(this.inputobj);
    this.service.saveData(this.inputobj);
  }

updateTitles(title:any){
this.title=title;
}
  

  updatedData(name:string){
this.data=name;

  }

  updateTitle(name:string){
    this.title=name;
  }

}
