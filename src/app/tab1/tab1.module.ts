import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ComponentModule } from '../components/components.module';
import { HeaderModule } from '../components/header/header.module';
import { PostcardComponent } from '../components/postcard/postcard.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ComponentModule,
    HeaderModule,
  ],
  declarations: [Tab1Page, PostcardComponent],
})
export class Tab1PageModule {}
