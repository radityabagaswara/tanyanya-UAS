import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PostcardComponent } from './postcard/postcard.component';
import { PostsettingComponent } from './postsetting/postsetting.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [PostcardComponent, PostsettingComponent],
  exports: [PostcardComponent, PostsettingComponent],
})
export class PostCardModule {}
