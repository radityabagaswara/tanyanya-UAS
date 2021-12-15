import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  users: [];
  constructor(private location: Location, private userService: UserService) {}

  onCancel(event: Event) {
    this.location.back();
  }
  onChange(event) {
    if (event.target.value.length < 1) {
      this.users = [];
      return;
    }
    this.userService.searchUser(event.target.value).subscribe((res) => {
      if (res.status === 'success') {
        this.users = res.data;
      }
    });
  }
}
