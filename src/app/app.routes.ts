import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ArtigosComponent } from './components/artigos/artigos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},               //rota principal
    {path: 'home', component: HomeComponent},           //rota do componente home
    {path: 'quem-somos', component: QuemSomosComponent},//rota do componente quem-somos
    {path: 'artigos', component: ArtigosComponent},     //rota do componente artigos
    {path: 'contato', component: ContatoComponent},     //rota do componente Contato
    {path: '**', component: NaoEncontradoComponent}     //rota para redirecionar paginas nao encontradas
];
