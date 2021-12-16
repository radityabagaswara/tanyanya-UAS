import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { HomePageService } from 'src/app/homepage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  user: any;
  posts: [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private tab1Service: HomePageService
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
