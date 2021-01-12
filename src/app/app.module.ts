import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { OutputComponent } from './counter/output/output.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/_state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OutputComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
