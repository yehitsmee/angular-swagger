import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiComponent } from './api/api.component';
import { CardComponent } from './card/card.component';
import { RoutingModule } from './routing.module';
import { ApiService } from './api.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    RoutingModule
  ],
  declarations: [AppComponent, HelloComponent, ApiComponent, CardComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
