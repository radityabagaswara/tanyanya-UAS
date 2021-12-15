import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { DetailpostService } from 'src/app/detailpost/detailpost.service';
import { PostService } from 'src/app/post/post.service';

@Component({
  selector: 'app-postsetting',
  templateUrl: './postsetting.component.html',
  styleUrls: ['./postsetting.component.scss'],
})
export class PostsettingComponent implements OnInit {
  @Input()
  data: any;

  user: any;

  constructor(
    private detailpostService: DetailpostService,
    private authService: AuthService,
    private toastController: ToastController,
    private postService: PostService,
    private router: Router
  ) {}

  async ngOnInit() {
    console.log(this.data);
    this.user = await this.authService.getData();
  }

  block() {
    this.postService
      .block(this.user.id, this.data.post_user_id)
      .subscribe(async (res: any) => {
        if (res.status === 'success') {
          const toast = await this.toastController.create({
            message: res.msg,
            duration: 2000,
            color: 'success',
          });
          toast.present();
          toast.onDidDismiss().then(() => {
            this.router.navigateByUrl('/');
          });
        } else {
          const toast = await this.toastController.create({
            message: res.msg,
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      });
  }

  delete() {
    this.detailpostService
      .deletePost(this.user.id, this.data.post_id)
      .subscribe(async (res) => {
        if (res.status === 'success') {
          const toast = await this.toastController.create({
            message: res.msg,
            duration: 2000,
            color: 'success',
          });
          toast.present();
          toast.onDidDismiss().then(() => {
            this.router.navigateByUrl('/');
          });
        } else {
          const toast = await this.toastController.create({
            message: res.msg,
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      });
  }
}
