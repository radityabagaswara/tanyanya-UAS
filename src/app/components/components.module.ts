import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';

@NgModule({
  declarations: [ExampleComponent, Example2Component],
  exports: [ExampleComponent, Example2Component],
})
export class ComponentModule {}
