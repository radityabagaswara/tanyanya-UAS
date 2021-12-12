import { NgModule } from '@angular/core';

import { PostcardComponent } from './postcard/postcard.component';
import { PostsettingComponent } from './postsetting/postsetting.component';

@NgModule({
  declarations: [PostcardComponent, PostsettingComponent],
  exports: [PostcardComponent, PostsettingComponent],
})
export class PostCardModule {}
