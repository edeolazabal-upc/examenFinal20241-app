import { Importe } from './../../model/importe';
import { Component, OnInit,  ViewChild, ElementRef  } from '@angular/core';
import { Chart,  } from 'chart.js/auto';
import { ExpensesService } from '../../services/expenses.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sum-bar',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './sum-bar.component.html',
  styleUrl: './sum-bar.component.css'
})

export class SumBarComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef: ElementRef<HTMLCanvasElement>;

  public chart: Chart;
  dataSource: Importe[] = [];
  nombres: string[] = [];
  valores: number[] = [];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.getImportes().then((data: Importe[]) => {
      this.dataSource = data;
      this.nombres = this.dataSource.map(item => item.nombre);
      this.valores = this.dataSource.map(item => item.importe);

      this.createChart();
    }).catch(error => {
      console.error('Error fetching importes', error);
    });
  }

  getImportes(): Promise<Importe[]> {
    return new Promise((resolve, reject) => {
      this.expensesService.getExpensesImporte().subscribe(
        (data: Importe[]) => {
          this.dataSource = data;
          console.log(this.dataSource);
          resolve(this.dataSource);
        },
        (error) => {
          console.error('Error fetching importes', error);
          reject(error);
        }
      );
    });
  }

  createChart(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const chartData = {
        labels: this.nombres,
        datasets: [{
          label: 'Importe de Gastos de Viaje',
          data: this.valores,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error("Failed to get 2D context");
    }
  }
}

