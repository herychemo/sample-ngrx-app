import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsItemHomeComponent } from './effects-item-home.component';

describe('EffectsItemHomeComponent', () => {
  let component: EffectsItemHomeComponent;
  let fixture: ComponentFixture<EffectsItemHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectsItemHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectsItemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
