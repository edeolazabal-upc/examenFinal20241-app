import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuenta } from '../model/cuenta';
import { Importe } from '../model/importe';
import { Observable } from 'rxjs';

// const base_url = "http://localhost:3000"
// const base_url = "https://scaling-fortnight-r75vg654x53xw4q-3000.app.github.dev/autos"
const base_url = 'http://localhost:8080/api/expense/gastos'
@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  getExpensesCuenta() {
    const endpoint = `${base_url}/cuenta`;
    return this.http.get<Cuenta[]>(endpoint)
  }
  getExpensesImporte(): Observable<Importe[]> {
    const endpoint = `${base_url}/importe`;
    return this.http.get<Importe[]>(endpoint)
  }


}
