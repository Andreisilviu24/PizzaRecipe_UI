import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPizzaComponent } from './components/pizzas/add-pizza/add-pizza.component';
import { EditPizzaComponent } from './components/pizzas/edit-pizza/edit-pizza.component';
import { PizzasListComponent } from './components/pizzas/pizzas-list/pizzas-list.component';

const routes: Routes = [
  {
    path: '',
    component: PizzasListComponent,
  },
  {
    path: 'all_recipes',
    component: PizzasListComponent,
  },
  {
    path: 'all_recipes/add',
    component: AddPizzaComponent,
  },
  {
    path: 'all_recipes/edit/:id',
    component: EditPizzaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
