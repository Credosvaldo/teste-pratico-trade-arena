import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstratoComponent } from './estrato.component';

describe('EstratoComponent', () => {
  let component: EstratoComponent;
  let fixture: ComponentFixture<EstratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstratoComponent]
    });
    fixture = TestBed.createComponent(EstratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
