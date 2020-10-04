import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from '../../../../services/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.createForm();
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

  submitForm(): void {
    if (this.f.invalid) {
      console.log('Input refused.');
      return;
    }
    this.doNewItem({
      ...this.f.value
    });
    this.f.reset();
  }
}
