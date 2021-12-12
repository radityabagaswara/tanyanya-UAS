import { Component, OnInit, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PostsettingComponent } from '../postsetting/postsetting.component';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss'],
})
export class PostcardComponent implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

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
}
