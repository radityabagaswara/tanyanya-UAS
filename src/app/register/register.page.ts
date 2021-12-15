import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  step = 1;
  username: string;
  name: string;
  email: string;
  password: string;

  submited: boolean;

  constructor(
    public registerService: RegisterService,
    public toastController: ToastController,
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    const token = await this.authService.getToken();
    console.log(token);
    if (token) {
      this.router.navigateByUrl('/');
    }
  }

  private nextStep() {
    this.step += 1;
  }

  private previousStep() {
    if (this.step > 0) {
      this.step -= 1;
    }
  }

  private async submit() {
    if (this.submited) {
      return;
    }

    this.registerService
      .createUser(this.name, this.username, this.email, this.password)
      .subscribe(async (data) => {
        if (data.status === 'success') {
          this.submited = true;
          const toast = await this.toastController.create({
            message: 'Registered!',
            duration: 2000,
            color: 'success',
          });
          toast.present();

          toast.onDidDismiss().then(() => {
            this.router.navigateByUrl('/login');
          });
        } else {
          this.submited = false;

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
