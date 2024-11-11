import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextErrRxjsComponent } from './next-err-rxjs.component';

describe('NextErrRxjsComponent', () => {
  let component: NextErrRxjsComponent;
  let fixture: ComponentFixture<NextErrRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextErrRxjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextErrRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
