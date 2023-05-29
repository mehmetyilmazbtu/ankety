import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/anket.model';
import { AnketService } from '../anket-servis.service';

@Component({
  selector: 'app-anket-sayfasi',
  templateUrl: './anket-sayfasi.component.html',
  styleUrls: ['./anket-sayfasi.component.css']
})
export class AnketSayfasiComponent implements OnInit {

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';
  

  constructor(private tutorialService: AnketService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  


}