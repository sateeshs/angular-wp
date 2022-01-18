import { Component, OnInit } from '@angular/core';
import { IconNamesEnum } from 'ngx-bootstrap-icons';
@Component({
  selector: 'app-plain-widget',
  templateUrl: './plain-widget.component.html',
  styleUrls: ['./plain-widget.component.scss']
})
export class PlainWidgetComponent implements OnInit {

  constructor() { }
  //@Input()
  public icon!: IconNamesEnum;

  ngOnInit(): void {
  }

}
