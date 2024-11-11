import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [ListComponent , FormComponent,CommonModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

}
