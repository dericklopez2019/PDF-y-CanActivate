import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/interfaces';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  componentes: Observable<Componente[]>;
  constructor(private menuCtrl: MenuController, private service: ClienteService, private router:Router) {}

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
}
