import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AuthService } from '../auth/auth.service';
import { DetailpostService } from '../detailpost/detailpost.service';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.page.html',
  styleUrls: ['./editpost.page.scss'],
})
export class EditpostPage implements OnInit {
  post: string;
  user: any;
  url = '';
  image = null;
  fileType = null;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private authService: AuthService,
    private postService: PostService,
    private detailpostService: DetailpostService,
    private router: Router
  ) {}

  async ngOnInit() {
    const token = await this.authService.getToken();
    if (!token) {
      return this.router.navigateByUrl('/login');
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.user = await this.authService.getData();
    this.detailpostService.getPost(this.user.id, this.id).subscribe((res) => {
      if (res.status === 'success') {
        this.post = res.data.post;
        if (res.data.image_url.length > 1) {
          this.url = 'https://ubaya.fun/hybrid/160719057/' + res.data.image_url;
        }
      }
    });
  }

  imageSelector(input) {
    input.click();
  }

  selectPicture(event) {
    if (event.target.files) {
      this.url = URL.createObjectURL(event.target.files[0]);
      this.image = event.target.files[0];

      this.fileType = this.image.name.split('.').pop().toLowerCase();

      const reader = new FileReader();
      reader.onloadend = () => {
        this.image = reader.result;
        this.image = this.image.split(',')[1];
      };
      reader.readAsDataURL(this.image);
    }
  }

  private editPost() {
    this.postService
      .editPost(this.id, this.post, this.image, this.fileType)
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
