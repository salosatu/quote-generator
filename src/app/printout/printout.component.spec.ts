import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintoutComponent } from './printout.component';

describe('PrintoutComponent', () => {
  let component: PrintoutComponent;
  let fixture: ComponentFixture<PrintoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('quote should be type of string', () => {
    expect(component.quote).toBeInstanceOf(String);
  });
  
});
