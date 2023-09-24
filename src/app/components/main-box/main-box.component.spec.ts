import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBoxComponent } from './main-box.component';

describe('MainBoxComponent', () => {
  let component: MainBoxComponent;
  let fixture: ComponentFixture<MainBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBoxComponent]
    });
    fixture = TestBed.createComponent(MainBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
