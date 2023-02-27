import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.css'],
})
export class EditPizzaComponent implements OnInit {
  pizzaDetails: Pizza = {
    id: '',
    name: '',
    ingredients: '',
    price: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.pizzaService.getPizza(id).subscribe({
            next: (response) => {
              this.pizzaDetails = response;
            },
          });
        }
      },
    });
  }

  updatePizza() {
      this.pizzaService.updatePizza(this.pizzaDetails.id, this.pizzaDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/all_recipes']);
        }
      })
  }

  deletePizza(id: string) {
    this.pizzaService.deletePizza(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['/all_recipes']);
      }
    })
  }
}
