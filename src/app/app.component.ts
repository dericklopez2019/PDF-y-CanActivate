import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from './services/cliente.service';
import { Componente } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]>;

  constructor(private service: ClienteService ) {
    this.componentes = this.service.getMenuOpts();

  }

}
