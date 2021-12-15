import { Component, Input, OnInit, Output } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { PostsettingComponent } from '../postsetting/postsetting.component';
import { format, formatDistance } from 'date-fns';
import { PostService } from 'src/app/post/post.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss'],
})
export class PostcardComponent implements OnInit {
  @Input()
  data: any;

  @Input()
  isFull? = null;

  date: string;
  timeto: string;

  constructor(
    private popoverController: PopoverController,
    private postService: PostService,
    private storage: Storage,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const dateTemp = new Date(this.data.data.created_at);
    this.date = format(dateTemp, 'd, MMM yyyy hh:mm a');
    this.timeto = formatDistance(new Date(), dateTemp, {
      addSuffix: false,
      includeSeconds: true,
    });
  }

  async openSetting(e) {
    const popover = await this.popoverController.create({
      component: PostsettingComponent,
      componentProps: { data: this.data.data },
      event: e,
      cssClass: 'custom-popover',
      translucent: true,
      showBackdrop: false,
    });

    await popover.present();
  }

  async likePost() {
    console.log(this.data.data.post_id);
    this.postService
      .likePost(
        this.data.data.post_id,
        JSON.parse(await this.storage.get('user')).id
      )
      .subscribe(async (res: { status: string; msg: string }) => {
        if (res.status === 'success') {
          if (res.msg === 'Liked!') {
            this.data.data.total_like += 1;
            this.data.data.user_liked = 1;
          } else {
            this.data.data.total_like -= 1;
            this.data.data.user_liked = 0;
          }
          const toast = await this.toastController.create({
            message: res.msg,
            duration: 2000,
            color: 'success',
          });
          toast.present();
        }
      });
  }
}
