import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Tab1Service } from './tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  user: any;
  posts: [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private tab1Service: Tab1Service
  ) {}
  async ngOnInit() {
    const token = await this.authService.getToken();
    if (!token) {
      return this.router.navigateByUrl('/login');
    }

    this.user = await this.authService.getData();

    this.tab1Service.getAllPost(this.user.id).subscribe((res) => {
      if (res.status === 'success') {
        this.posts = res.data;
      }
    });
  }

  doRefresh(event) {
    this.tab1Service.getAllPost(this.user.id).subscribe((res) => {
      if (res.status === 'success') {
        this.posts = res.data;
        event.target.complete();
      }
    });
  }
}
