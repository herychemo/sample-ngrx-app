import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../../item-data/model/item';
import { filter, map } from 'rxjs/operators';

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

  @Output()
  formError: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  clearFormError: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.createForm();

    this.f.statusChanges.pipe(
      filter(value => value === 'VALID' || value === 'INVALID'),
      map(value => value === 'VALID'),
      filter(value => value),
    ).subscribe(_ => this.doClearFormError());
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

  doFormError(errorMessage: string): void {
    this.formError.emit(errorMessage);
  }

  doClearFormError(): void {
    this.clearFormError.emit();
  }

  doSubmit(): void {
    if (this.f.invalid) {
      this.doFormError('Input Refused');
      return;
    }
    this.doSaveItem({
      ...this.f.value,
      id: this.item.id
    });
  }
}
