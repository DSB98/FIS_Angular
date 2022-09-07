import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPipeDemoComponent } from './angular-pipe-demo.component';

describe('AngularPipeDemoComponent', () => {
  let component: AngularPipeDemoComponent;
  let fixture: ComponentFixture<AngularPipeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPipeDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
