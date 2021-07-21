import { Component, VERSION } from '@angular/core';

import api from '../assets/api.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {}
  spec = api;
}
