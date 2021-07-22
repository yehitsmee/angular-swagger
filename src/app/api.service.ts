import { Injectable } from '@angular/core';
import api from '../assets/api.json';

@Injectable()
export class ApiService {
  spec = api;
  constructor() {}
  getApi() {
    return this.spec;
  }
}
