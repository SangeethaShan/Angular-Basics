import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { TestComponent } from './test/test.component'
import { EmpDetailsComponent } from './emp-details/emp-details.component';


const appRouts: Routes = [
  {
    path: 'emp-list',
    component: EmpListComponent,
    children: [
      {
        path: 'emp-details',
        component: EmpDetailsComponent,
      }
    ]
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '',
    redirectTo: 'emp-list',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [       
    RouterModule.forRoot(appRouts)    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }