import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.css'],
})
export class PizzasListComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(private pizzasService: PizzasService) {}

  ngOnInit(): void {
    this.pizzasService.getAllPizzas()
    .subscribe({
      next: (pizzas) => {
        this.pizzas = pizzas;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
