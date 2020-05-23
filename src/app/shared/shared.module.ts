import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackHomeComponent } from './components/back-home/back-home.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    BackHomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    BackHomeComponent
  ]
})
export class SharedModule { }
