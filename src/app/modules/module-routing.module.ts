import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
    {
      path: '', component: ModuleComponent,
      children: [
        {
          path: '',
          redirectTo: 'pokemon_info', 
          pathMatch: 'full'
        },
        {
          path: 'pokemon_info',
          component: PokemonListComponent
        },
        {
          path: 'pokemon_detail/:id',
          component: PokemonDetailComponent
        },
        {
          path: '**',
          redirectTo: 'pokemon_info', 
          pathMatch: 'full'
        }
      ]
    },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }