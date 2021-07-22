import { Injectable } from '@angular/core';
import api from '../assets/api.json';
import pet from '../assets/pet.json';

@Injectable()
export class ApiService {
  // spec = api;
  constructor() {}
  getSwaggerUI() {
    return api;
  }
  getApi(type: string) {
    if (type === 'pet') {
      console.log('Hi');
      console.log(pet);
      return pet;
    } else {
      console.log('No');
      return api;
    }
  }
}
