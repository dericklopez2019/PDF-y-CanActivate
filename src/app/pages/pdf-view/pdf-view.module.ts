import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfViewPageRoutingModule } from './pdf-view-routing.module';

import { PdfViewPage } from './pdf-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [PdfViewPage]
})
export class PdfViewPageModule {}
