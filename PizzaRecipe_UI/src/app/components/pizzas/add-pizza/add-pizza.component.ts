import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {

  addPizzaRequest: Pizza = {
    id: '',
    name: '',
    ingredients: '',
    price: 0
  };

  constructor(private pizzaService: PizzasService, private router: Router) { }

  ngOnInit(): void {}

  addPizza() {
    this.pizzaService.addPizza(this.addPizzaRequest)
    .subscribe({
      next: (pizza) => {
        this.router.navigate(['/all_recipes']);
      }
    })
  }

}
