import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleItemHomeComponent } from './simple-item-home.component';

describe('SimpleItemHomeComponent', () => {
  let component: SimpleItemHomeComponent;
  let fixture: ComponentFixture<SimpleItemHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleItemHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleItemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
