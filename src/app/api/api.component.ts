import { AfterViewInit, Component, Input } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements AfterViewInit {
  @Input() spec: any;
  constructor() {}

  ngAfterViewInit() {
    const ui = SwaggerUI({
      domNode: document.getElementById('swagger-ui'),
      spec: this.spec
      // url: 'https://petstore.swagger.io/v2/swagger.json'
    });
  }
}
