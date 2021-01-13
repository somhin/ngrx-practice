import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { OutputComponent } from './output/output.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './_state/counter.reducer';
import { COUNTER_STATE_NAME } from './_state/counter.selectors';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [
    CounterComponent,
    OutputComponent,
    ButtonsComponent,
    CustomInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
  ],
})
export class CounterModule {}
