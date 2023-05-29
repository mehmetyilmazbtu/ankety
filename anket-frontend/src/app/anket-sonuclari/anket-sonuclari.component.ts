import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
import { AnketService } from '../anket-servis.service';

@Component({
  selector: 'app-anket-sonuclari',
  templateUrl: './anket-sonuclari.component.html',
  styleUrls: ['./anket-sonuclari.component.css']
})
export class AnketSonuclariComponent implements OnInit {

  constructor(private http: HttpClient,
    private anketService: AnketService) { }

  ngOnInit() {
    this.anketService.getAll().subscribe(data => {
      let labels:any = [], dataPoints:any = [];

      data.forEach(item => {
        labels.push(item.title);
        dataPoints.push(item.description);
      });

      let chart = new Chart('anket-grafik', {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: dataPoints,
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0']
          }]
        }
      });
    });
  }

}
