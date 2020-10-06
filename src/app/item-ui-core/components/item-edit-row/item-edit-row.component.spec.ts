import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditRowComponent } from './item-edit-row.component';

describe('SimpleItemEditRowComponent', () => {
  let component: ItemEditRowComponent;
  let fixture: ComponentFixture<ItemEditRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEditRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
