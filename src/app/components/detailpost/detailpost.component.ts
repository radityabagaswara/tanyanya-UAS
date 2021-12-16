import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { DetailpostService } from 'src/app/detailpost.service';

@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrls: ['./detailpost.component.scss'],
})
export class DetailpostComponent implements OnInit {
  data: any;
  loaded = false;
  id: any;
  user: any;
  comment: string;

  comments: [];

  constructor(
    private detailpostService: DetailpostService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private toastController: ToastController,
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
        this.data = res.data;
        this.loaded = true;
      }
    });
    this.detailpostService.getComment(this.id).subscribe((res) => {
      if (res.status === 'success') {
        this.comments = res.data;
      }
    });
  }

  addComment() {
    this.detailpostService
      .addComment(this.comment, this.user.id, this.id)
      .subscribe(async (res) => {
        if (res.status === 'success') {
          const toast = await this.toastController.create({
            message: 'Comment Success',
            duration: 2000,
            color: 'success',
          });
          toast.present();
          toast.onDidDismiss().then(() => {
            this.doRefresh();
            this.comment = '';
          });
        }
      });
  }

  doRefresh(event?) {
    this.detailpostService.getComment(this.id).subscribe((res) => {
      if (res.status === 'success') {
        this.comments = res.data;
      }
    });

    this.detailpostService.getPost(this.user.id, this.id).subscribe((res) => {
      if (res.status === 'success') {
        this.data = res.data;
        this.loaded = true;
        if (event) {
          event.target.complete();
        }
      }
    });
  }
}
