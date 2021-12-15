import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private storage: Storage,
    private http: HttpClient,
    private router: Router,
    private toastController: ToastController
  ) {}

  async getToken() {
    const token = await this.storage.get('token');
    console.log(token);
    if (!token) {
      return false;
    }

    const data: any = await this.validateToken(token);
    if (!token) {
      return false;
    }

    if (data.status === 'success') {
      this.storage.set('user', JSON.stringify(data.data));
      return true;
    }

    this.logout();
    return false;
  }

  async getData() {
    const data = JSON.parse(await this.storage.get('user'));
    return data;
  }

  async validateToken(token) {
    return new Promise((resolve, reject) => {
      let body = new HttpParams();
      body = body.set('token', token);
      this.http
        .post(
          'https://ubaya.fun/hybrid/160719057/api/user/checklogin.php',
          body
        )
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  async logout() {
    await this.storage.remove('token');
    await this.storage.remove('user');

    const toast = await this.toastController.create({
      message: 'Logout success. Redirecting...',
      duration: 2000,
      color: 'success',
    });
    toast.present();
    this.router.navigateByUrl('/login');
  }
}
