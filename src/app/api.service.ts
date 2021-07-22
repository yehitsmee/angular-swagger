import { Injectable } from '@angular/core';
import api from '../assets/api.json';
import pet from '../assets/pet.json';

@Injectable()
export class ApiService {
  // spec = api;
  constructor() {}
  getApi(type: string) {
    if (type === 'pet') {
      return pet;
    } else {
      return api;
    }
  }
}
