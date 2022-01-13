import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    NgbNavModule, NgbCollapseModule
  ],
  exports: [
    NgbNavModule, NgbCollapseModule
  ]
})
export class BootstrapImportModule { }
