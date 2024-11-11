import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeSubscriberComponent } from './custome-subscriber.component';

describe('CustomeSubscriberComponent', () => {
  let component: CustomeSubscriberComponent;
  let fixture: ComponentFixture<CustomeSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeSubscriberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomeSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
