import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksListPage } from './works-list.page';

const routes: Routes = [
  {
    path: '',
    component: WorksListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksListPageRoutingModule {}
