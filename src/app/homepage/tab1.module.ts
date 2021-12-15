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
import { PostCardModule } from '../components/postcard.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ComponentModule,
    HeaderModule,
    PostCardModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
