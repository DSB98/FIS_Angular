import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtBlockRightComponent } from './txt-block-right.component';

describe('TxtBlockRightComponent', () => {
  let component: TxtBlockRightComponent;
  let fixture: ComponentFixture<TxtBlockRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtBlockRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxtBlockRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
