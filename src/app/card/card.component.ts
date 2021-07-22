import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private spec: any;
  // private tag: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.spec = this.apiService.getApi;
  }
}
