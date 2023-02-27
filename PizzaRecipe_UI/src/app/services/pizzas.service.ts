import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.baseApiUrl + '/api/Pizzas');
  }

  addPizza(addPizzaRequest: Pizza): Observable<Pizza> {
    addPizzaRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Pizza>(this.baseApiUrl + '/api/Pizzas', addPizzaRequest);
  }

  getPizza(id: string): Observable<Pizza> {
    return this.http.get<Pizza>(this.baseApiUrl + '/api/Pizzas/' + id);
  }

  updatePizza(id: string, updatePizzaRequest: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(this.baseApiUrl + '/api/Pizzas/' + id, updatePizzaRequest);
  }

  deletePizza(id: string): Observable<Pizza> {
    return this.http.delete<Pizza>(this.baseApiUrl + '/api/Pizzas/' + id);
  }
}
