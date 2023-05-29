import { Component, Input, OnInit } from '@angular/core';
import { AnketService } from '../anket-servis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from '../models/anket.model';
import { arr } from '../models/anket.array.model';

@Component({
  selector: 'app-anket-detay',
  templateUrl: './anket-detay.component.html',
  styleUrls: ['./anket-detay.component.css']
})
export class AnketDetayComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTutorial: Tutorial = {
    title: '',
    description: arr[''],
    published: false
  };
  
  message = '';

  constructor(
    private tutorialService: AnketService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/anket-sayfasi']);
        },
        error: (e) => console.error(e)
      });
  }

}