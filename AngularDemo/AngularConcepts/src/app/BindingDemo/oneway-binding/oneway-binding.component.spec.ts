import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayBindingComponent } from './oneway-binding.component';

describe('OnewayBindingComponent', () => {
  let component: OnewayBindingComponent;
  let fixture: ComponentFixture<OnewayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnewayBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnewayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
