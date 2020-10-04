import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemHomeComponent } from './store-item-home.component';

describe('StoreItemHomeComponent', () => {
  let component: StoreItemHomeComponent;
  let fixture: ComponentFixture<StoreItemHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreItemHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreItemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
