import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.page.html',
  styleUrls: ['./pdf-view.page.scss'],
})
export class PdfViewPage implements OnInit {
  showPdf = false;
  pdfSrc = "";
  zoomLevel = 1;
  @ViewChild('fileInput') fileInput: ElementRef;



  constructor( private navCtrl: NavController, private alertCtrl: AlertController ) { }




  ngOnInit() {
  }

  openFileInput() {
    // abre el selector de archivos
    this.fileInput.nativeElement.click();
  }

  loadPDF(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.pdfSrc = URL.createObjectURL(file);
      this.showPdf = true;

    }
  }
  zoomMas() {
    // Función para aumentar el nivel de zoom
    this.zoomLevel += 0.1;
  }

  zoomMenos() {
    // Función para reducir el nivel de zoom
    if(this.zoomLevel > 0)
    {
      this.zoomLevel -= 0.1;
    }
  }

  }

