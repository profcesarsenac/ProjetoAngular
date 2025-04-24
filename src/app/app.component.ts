import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ArtigosComponent } from './components/artigos/artigos.component';
import { ContatoComponent } from './components/contato/contato.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink, 
    HomeComponent,
    QuemSomosComponent,
    ArtigosComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetoAngular';
}
