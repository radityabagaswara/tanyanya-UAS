import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailpostPageRoutingModule } from './detailpost-routing.module';

import { DetailpostPage } from './detailpost.page';
import { HeaderModule } from '../components/header/header.module';
import { DetailpostService } from './detailpost.service';
import { PostCardModule } from '../components/postcard.module';
import { PostcardComponent } from '../components/postcard/postcard.component';
import { CommentComponent } from '../components/comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailpostPageRoutingModule,
    HeaderModule,
    PostCardModule,
  ],
  declarations: [DetailpostPage, CommentComponent],
  providers: [DetailpostService],
})
export class DetailpostPageModule {}
