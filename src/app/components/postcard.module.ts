import { NgModule } from '@angular/core';
import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';
import { PostcardComponent } from './postcard/postcard.component';
import { PostsettingComponent } from './postsetting/postsetting.component';

@NgModule({
  declarations: [PostcardComponent, PostsettingComponent],
  exports: [PostcardComponent, PostsettingComponent],
})
export class PostCardModule {}
