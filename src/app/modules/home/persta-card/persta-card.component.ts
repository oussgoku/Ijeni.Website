import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persta-card',
  templateUrl: './persta-card.component.html',
  styleUrls: ['./persta-card.component.scss']
})
export class PerstaCardComponent implements OnInit {

  @Input() provider?
  constructor() { }

  ngOnInit(): void {
  }

}
