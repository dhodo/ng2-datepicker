import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DatePickerIonicComponent } from './components/ionic/datepickerionic';

import { SingleSelectDirective } from './selections/single.select';
import { MultiSelectDirective } from './selections/multi.select';

import { MomentFormatPipe } from './pipes/momentformat';
import { DayClassesPipe } from './pipes/dayClasses';

const decl_exports = [
  DatePickerIonicComponent,

  SingleSelectDirective,
  MultiSelectDirective,

  MomentFormatPipe,
  DayClassesPipe
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: decl_exports,
  exports: decl_exports
})
export class DatePickerModule { }
