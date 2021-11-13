import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent, HeaderComponent],
  exports: [HeaderComponent, HeaderComponent],
})
export class HeaderModule {}
