import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent } from 'rxjs';
import { CustomeObservableComponent } from './custome-observable/custome-observable.component';
import { DataComponent } from './data/data.component';
import { ObservableComponent } from './observable/observable.component';
import { ShowComponent } from './show/show.component';
import { LeadingComment } from '@angular/compiler';
import { LerningComponent } from './lerning/lerning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CustomeObservableComponent,
    DataComponent,
    ObservableComponent,
    ShowComponent,
    LerningComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs-learn';
  data: number = 0;
  displayUser: boolean = false;

  users = [
    { id: '1', name: 'adhi', age: '30' },
    { id: '2', name: 'priya', age: '30' },
    { id: '3', name: 'rithvik', age: '1' },
  ];

  @ViewChild('myButton', { static: true }) myButton!: ElementRef;

  constructor() {
    // const number$ =from  ( [1,1,1,1,1,6]);

    // // number$.pipe(distinctUntilChanged()).subscribe((data) =>{
    // //   console.log('subscriber of ', data);
    // // })
    // number$.subscribe((data) =>{
    //   console.log('subscriber of ', data);
    //   this.data=data;
    // })

    const user$ = from([this.users]);
    const clickEvent$ = fromEvent(document, 'clicked');

    user$.subscribe((users) => {
      console.log('subscribersof ', users);
      this.users = users;
    });

    // clickEvent$.subscribe((event)=>{
    //   console.log('this is from event',event)
    // })
  }
  ngAfterViewInit() {
    // fromEvent(this.myButton.nativeElement, 'click').subscribe((event) => {
    //   console.log('this is from click', this.users);
    //   this.displayUser = true;
    // });
  }
}
