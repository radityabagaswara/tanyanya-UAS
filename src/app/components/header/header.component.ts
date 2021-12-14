import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: string;
  username: string;
  avatar: string;

  constructor(private menu: MenuController, private authService: AuthService) {}

  async ngOnInit() {
    const userData = await this.authService.getData();
    this.name = userData.name;
    this.username = userData.username;
    this.avatar =
      userData.photo_url ??
      `https://ui-avatars.com/api/?name=${this.name}&rounded=true&background=FCE4EC`;
  }

  openMenu() {
    this.menu.open();
  }

  logout() {
    this.authService.logout();
  }
}
