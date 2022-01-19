import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconNamesEnum } from 'ngx-bootstrap-icons';
@Component({
  selector: 'app-plain-widget',
  templateUrl: './plain-widget.component.html',
  styleUrls: ['./plain-widget.component.scss']
})
export class PlainWidgetComponent implements OnInit {

  constructor(private router: Router) { }
  //@Input()
  public icon!: IconNamesEnum;
  currentRate =5;
  id= 123

  ngOnInit(): void {
  }

  productDetails() {
      this.router.navigateByUrl(`product/${this.id}`);
  }

}
