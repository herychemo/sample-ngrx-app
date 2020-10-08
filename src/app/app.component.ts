import { Component } from '@angular/core';
import {ErrorMessageFacade} from './state/error-message.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-ngrx';
  error$ = this.errorMessageFacade.errorMessage$;

  constructor(private errorMessageFacade: ErrorMessageFacade) { }
}
