import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule, allIcons, ColorTheme } from 'ngx-bootstrap-icons';




@NgModule({
  declarations: [],
  imports: [
    NgbNavModule, NgbCollapseModule, NgxBootstrapIconsModule.pick(allIcons,  { 
      width: '1em', 
      height: '1em', 
      theme: ColorTheme.Danger,
  })
  ],
  exports: [
    NgbNavModule, NgbCollapseModule, NgxBootstrapIconsModule
  ]
})
export class BootstrapImportModule { }
