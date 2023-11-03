import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/interfaces';
import { ClienteService } from '../services/cliente.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  componentes: Observable<Componente[]>;
  constructor(private menuCtrl: MenuController, private service: ClienteService, private router:Router, private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.componentes = this.service.getMenuOpts();
  }
  mostrarMenu(){
    this.menuCtrl.open('first');
  }
  goToPDF(){
    this.router.navigate(['/pdf-view'])
  }
  goTohome(){
    this.router.navigate(['/home'])
  }
  async Loading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 5000, //Dura 5 segundos y se cierra
      backdropDismiss: true // Al tocar la parte de atras hace que cierre el loading
    });

    await loading.present();
  }
  ionViewWillEnter() {
    this.Loading();
  }
}
