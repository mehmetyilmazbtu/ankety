import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
import { AnketService } from '../anket-servis.service';
import { Tutorial } from '../models/anket.model';

@Component({
  selector: 'app-anket-sonuclari',
  templateUrl: './anket-sonuclari.component.html',
  styleUrls: ['./anket-sonuclari.component.css']
})
export class AnketSonuclariComponent implements OnInit {
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  tutorials?: Tutorial[];
  chart = new Chart('anket-grafik',{
    type:'pie',
    data:{
      labels:[''],
      datasets: [{
        data: [''],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0']
      }]

    }
  })
  
  constructor(private http: HttpClient,
    private anketService: AnketService) { }

  ngOnInit() {
    this.retrieveTutorials()
    
    
  
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
    this.getChart()
  }

  getChart(){
    this.anketService.get(this.currentTutorial.id).subscribe(data => {
      let labels:any=[], dataPoints:any = data.description, count:any=[];
      console.log(data.description)
      for(let i=0;i<data.description.length;i++){
        labels.push(dataPoints[i]?.qty)
        count.push(dataPoints[i]?.count)

      }
      this.chart.destroy()
      this.chart = new Chart('anket-grafik', {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: count,
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0']
          }]
        }
      });
    });
  }

  retrieveTutorials(): void {
    this.anketService.getAll()
      .subscribe({
        next: (data) => {
          this.currentTutorial = data[0];
    this.currentIndex = 0;
          this.tutorials = data;
          console.log(data);
          this.getChart()
        },
        error: (e) => console.error(e)
      });
  }

}
