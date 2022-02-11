import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorksListPageRoutingModule } from './works-list-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { WorksListPage } from './works-list.page';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      WorksListPageRoutingModule,
      SharedModule
  ],
  declarations: [WorksListPage]
})

export class WorksListPageModule {}
