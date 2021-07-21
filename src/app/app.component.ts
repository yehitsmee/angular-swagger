import { AfterViewInit, Component, VERSION } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;

  constructor() {}

  ngAfterViewInit() {
    const ui = SwaggerUI({
      domNode: document.getElementById('swagger-ui'),
      url: 'https://petstore.swagger.io/v2/swagger.json'
    });
  }
}
