import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranchiseListComponent } from './franchise-list/franchise-list/franchise-list.component';
import { FranchiseFormComponent } from './franchise-form/franchise-form/franchise-form.component';

const routes: Routes = [
  { path: 'listfranchise', component: FranchiseListComponent },
  { path: 'addfranchise', component: FranchiseFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
