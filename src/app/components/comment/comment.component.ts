import { Component, Input, OnInit } from '@angular/core';
import { format, formatDistance } from 'date-fns';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input()
  data: any;
  date: string;
  timeto: string;
  constructor() {}

  ngOnInit() {
    const dateTemp = new Date(this.data.created_at);
    this.date = format(dateTemp, 'd, MMM yyyy hh:mm a');
    this.timeto = formatDistance(new Date(), dateTemp, {
      addSuffix: false,
      includeSeconds: true,
    });
  }
}
