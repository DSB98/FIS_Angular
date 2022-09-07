import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtBlockLeftComponent } from './txt-block-left.component';

describe('TxtBlockLeftComponent', () => {
  let component: TxtBlockLeftComponent;
  let fixture: ComponentFixture<TxtBlockLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtBlockLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxtBlockLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
