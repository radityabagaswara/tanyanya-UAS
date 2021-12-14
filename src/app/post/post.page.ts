import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  post: string;
  user: any;
  url = '';
  image: any;

  constructor(
    private postService: PostService,
    private storage: Storage,
    private toastController: ToastController,
    private router: Router
  ) {}

  async ngOnInit() {
    this.user = JSON.parse(await this.storage.get('user'));
  }

  imageSelector(input) {
    input.click();
  }

  selectPicture(event) {
    if (event.target.files) {
      this.url = URL.createObjectURL(event.target.files[0]);
      this.image = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.image = reader.result;
        this.image = this.image.replace('data:image/jpeg;base64,', '');
      };
      reader.readAsDataURL(this.image);
    }
  }

  private createPost() {
    this.postService
      .createPost(this.post, this.user.id, this.image)
      .subscribe(async (res) => {
        if (res.status === 'success') {
          const toast = await this.toastController.create({
            message: 'Login Success. Redirecting...',
            duration: 2000,
            color: 'success',
          });
          toast.present();
          toast.onDidDismiss().then(() => {
            this.router.navigateByUrl('/');
          });
        } else {
          const toast = await this.toastController.create({
            message: res.status,
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      });
  }
}
