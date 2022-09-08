import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeUtilityServiceComponent } from './consume-utility-service.component';

describe('ConsumeUtilityServiceComponent', () => {
  let component: ConsumeUtilityServiceComponent;
  let fixture: ComponentFixture<ConsumeUtilityServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumeUtilityServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumeUtilityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
