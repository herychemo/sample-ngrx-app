import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../../services/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-edit-row',
  templateUrl: './item-edit-row.component.html',
  styles: [
  ]
})
export class ItemEditRowComponent implements OnInit {

  f: FormGroup;

  @Input()
  item: Item;

  @Output()
  saveItem: EventEmitter<Item> = new EventEmitter<Item>();

  @Output()
  cancelItemEdit: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.f = this.fb.group({
      title: [this.item.title, [Validators.required]],
      content: [this.item.content, [Validators.required, Validators.minLength(5)]]
    });
  }

  doSaveItem(item: Item): void {
    this.saveItem.emit(item);
  }

  doCancelItemEdit(): void {
    this.cancelItemEdit.emit();
  }

  doSubmit(): void {
    if (this.f.invalid) {
      console.log('Input refused.');
      return;
    }
    this.doSaveItem({
      ...this.f.value,
      id: this.item.id
    });
  }
}
