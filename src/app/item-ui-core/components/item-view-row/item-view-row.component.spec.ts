import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemViewRowComponent } from './item-view-row.component';

describe('SimpleItemViewRowComponent', () => {
  let component: ItemViewRowComponent;
  let fixture: ComponentFixture<ItemViewRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemViewRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemViewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
