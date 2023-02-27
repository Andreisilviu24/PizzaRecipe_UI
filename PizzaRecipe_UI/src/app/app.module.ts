import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasListComponent } from './components/pizzas/pizzas-list/pizzas-list.component';
import { AddPizzaComponent } from './components/pizzas/add-pizza/add-pizza.component';
import { FormsModule } from '@angular/forms';
import { EditPizzaComponent } from './components/pizzas/edit-pizza/edit-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzasListComponent,
    AddPizzaComponent,
    EditPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
