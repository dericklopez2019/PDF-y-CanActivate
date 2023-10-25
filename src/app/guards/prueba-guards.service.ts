import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PruebaGuardsService {

  constructor(private alertController: AlertController) { }

  canActivateFn(route: ActivatedRouteSnapshot) {

  }
  async canDeactivate(): Promise<boolean> {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Está seguro de que deseas salir de esta página?',
      buttons: [
        {
          text: 'Si',
          role: 'si',
          handler: () => {

          },
        },
        {
          text: 'Cancelar',
          handler: () => {

          },
        },
      ],
    });

    await alert.present();
    const result = await alert.onDidDismiss();

    return result.role === 'si'; // Si el usuario hizo clic en "Si",  permite la navegación
  }
}


