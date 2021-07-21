import { AfterViewInit, Component, VERSION } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import api from '../assets/api.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;

  constructor() {}
  spec = api;

  ngAfterViewInit() {
    const ui = SwaggerUI({
      domNode: document.getElementById('swagger-ui'),
      spec: this.spec
      // url: 'https://petstore.swagger.io/v2/swagger.json'
    });
  }
}
