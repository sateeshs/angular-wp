import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlainWidgetComponent } from './components/plain-widget/plain-widget.component';
import { ProductComponent } from './components/product/product.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'product/:id', component: ProductComponent, 
          data: {},
          children: [
            //{path: '', component: }
          ]
        },
  { path: 'order/:id', component: ProductComponent,
            data: {},
            children: [
              //{orderList: '', component: }
              //{orderCompleted: '', component: }
            ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
