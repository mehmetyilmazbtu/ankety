import { Component, Input, OnInit } from '@angular/core';
import { AnketService } from '../anket-servis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from '../models/anket.model';
import { arr } from '../models/anket.array.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anket-detay',
  templateUrl: './anket-detay.component.html',
  styleUrls: ['./anket-detay.component.css']
})
export class AnketDetayComponent implements OnInit {

  @Input() viewMode = false;
  ipAddress = ''

  @Input() currentTutorial: Tutorial = {
    title: '',
    description: arr[''],
    voted: Array['']
  };

  message = '';

  constructor(
    private tutorialService: AnketService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
    this.getIpFrom()

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

    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);

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
  showTut(i) {
    const voted = this.currentTutorial.voted
    const findIp = voted?.find(el => el === this.ipAddress)
    if (findIp) {
      console.log("Daha önce bu ankete oy verdiniz...")
    }
    else if(this.ipAddress==''){
      console.log("Lütfen birkaç saniye sonra tekrar deneyiniz.")
    }
    else {
      this.currentTutorial.description[i].count++
      this.currentTutorial.voted.push(this.ipAddress)
      this.updateTutorial()
    }
  }

  getIpFrom(){
    this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
        this.ipAddress=res.ip
      });
  }
}
