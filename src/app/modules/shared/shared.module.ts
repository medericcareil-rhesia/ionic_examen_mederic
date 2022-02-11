import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from 'src/app/components/header/header.component';

const directives: Array<any> = [
  HeaderComponent,
];

@NgModule({
  declarations: directives,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  providers: [],
  exports: directives
})

export class SharedModule { }
