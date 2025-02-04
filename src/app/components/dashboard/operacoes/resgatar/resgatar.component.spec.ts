import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgatarComponent } from './resgatar.component';

describe('ResgatarComponent', () => {
  let component: ResgatarComponent;
  let fixture: ComponentFixture<ResgatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResgatarComponent]
    });
    fixture = TestBed.createComponent(ResgatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
