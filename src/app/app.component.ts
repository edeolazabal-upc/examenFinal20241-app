import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ExpensesService } from './services/expenses.service';
import { HttpClientModule } from '@angular/common/http';
import { CountBarComponent } from './components/count-bar/count-bar.component';
import { SumBarComponent } from './components/sum-bar/sum-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, CountBarComponent, SumBarComponent, HttpClientModule],
    providers: [ExpensesService]
})
export class AppComponent {
  title = 'examenFinal20241';
}
