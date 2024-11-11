import { Component, inject } from '@angular/core';
import { TestservicesService } from '../testservices.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
userData:any;

designform = new FormGroup({
  id: new FormControl( '',Validators.required),
  name: new FormControl('', Validators.required),
  username: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  address: new FormControl('', Validators.required)
});

  private TestservicesService = inject (TestservicesService)

constructor(){}

ngOnInit(){
  this.TestservicesService.getCode('Clementina DuBuque').toPromise().then(result=>{
    this.userData= result;
    this.designform = new FormGroup({
      id: new FormControl(this.userData.id),
      name: new FormControl(this.userData.name),
      username: new FormControl(this.userData.username),
      email: new FormControl(this.userData.email),
      address: new FormControl(this.userData.address)
    });
  }).catch(error=>{

  }).finally(()=>{

  })
}
  onChange(){

  }
  saveDes(){
    if(this.designform.valid){
      this.TestservicesService.save(this.designform.value).subscribe(result=>{
        
      })
    }
  }
 
}
