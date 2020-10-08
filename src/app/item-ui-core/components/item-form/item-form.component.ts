import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../../item-data/model/item';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styles: [
  ]
})
export class ItemFormComponent implements OnInit {

  f: FormGroup;

  @Output()
  newItem: EventEmitter<Item> = new EventEmitter<Item>();

  @Output()
  formError: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  clearFormError: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.createForm();

    this.f.statusChanges.pipe(
      filter(value => value === 'VALID' || value === 'INVALID'),
      distinctUntilChanged(),
      map(value => value === 'VALID'),
      filter(value => value),
    ).subscribe(_ => this.doClearFormError());
  }

  private createForm(): void {
    this.f = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      title: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  doNewItem(item: Item): void {
    this.newItem.emit(item);
  }

  doFormError(errorMessage: string): void {
    this.formError.emit(errorMessage);
  }

  doClearFormError(): void {
    this.clearFormError.emit();
  }

  submitForm(): void {
    if (this.f.invalid) {
      this.doFormError('Input Refused');
      return;
    }
    this.doNewItem({
      ...this.f.value
    });
    this.f.reset();
  }
}
