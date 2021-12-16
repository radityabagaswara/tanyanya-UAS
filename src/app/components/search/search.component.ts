import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  users: [];
  constructor(private location: Location, private userService: UserService) {}
  ngOnInit(): void {}

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
