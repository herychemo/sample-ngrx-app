import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { AppRootState } from './app-root.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-ngrx';

  errorMessage$ = this.store.pipe(
    select(state => state.errorMessage)
  );

  constructor(private store: Store<AppRootState>) { }
}
