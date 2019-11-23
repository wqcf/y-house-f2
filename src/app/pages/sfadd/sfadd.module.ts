import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SfaddComponent } from './sfadd.component';
import { RouterModule, Routes } from '@angular/router';

export const routes : Routes = [
  {
    path: '', component: SfaddComponent, pathMatch: 'full'
  }
]
@NgModule({
  declarations: [ SfaddComponent ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SfaddModule { }
