import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginService } from './login.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private storage: Storage,
    private toastController: ToastController,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    const token = await this.authService.getToken();
    if (token) {
      this.router.navigateByUrl('/');
    }
  }

  login() {
    this.loginService
      .loginUser(this.username, this.password)
      .subscribe(async (data) => {
        if (data.status === 'success') {
          await this.storage.set('token', data.token);
          await this.authService.getToken();

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
            message: data.status,
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      });
  }
}
