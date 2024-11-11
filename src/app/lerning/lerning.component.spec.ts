import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerningComponent } from './lerning.component';

describe('LerningComponent', () => {
  let component: LerningComponent;
  let fixture: ComponentFixture<LerningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LerningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LerningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
