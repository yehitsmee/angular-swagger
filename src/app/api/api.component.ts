import { AfterViewInit, Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements AfterViewInit, OnInit {
  spec: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.spec = this.apiService.getApi;
  }
  ngAfterViewInit() {
    const ui = SwaggerUI({
      domNode: document.getElementById('swagger-ui'),
      spec: this.spec
      // url: 'https://petstore.swagger.io/v2/swagger.json'
    });
  }
}
