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

  date: string;
  timeto: string;

  constructor(
    private popoverController: PopoverController,
    private postService: PostService,
    private storage: Storage,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    console.log(this.data);
    const dateTemp = new Date(this.data.post.created_at);
    this.date = format(dateTemp, 'd, MMM yyyy hh:mm a');
    this.timeto = formatDistance(new Date(), dateTemp, {
      addSuffix: false,
      includeSeconds: true,
    });
  }

  async openSetting(e) {
    const popover = await this.popoverController.create({
      component: PostsettingComponent,
      event: e,
      cssClass: 'custom-popover',
      translucent: true,
      showBackdrop: false,
    });

    await popover.present();
  }

  async likePost() {
    console.log(this.data.post.post_id);
    this.postService
      .likePost(
        this.data.post.post_id,
        JSON.parse(await this.storage.get('user')).id
      )
      .subscribe(async (res: { status: string; msg: string }) => {
        if (res.status === 'success') {
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
