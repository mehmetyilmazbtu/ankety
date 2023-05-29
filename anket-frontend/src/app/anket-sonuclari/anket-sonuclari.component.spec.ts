import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketSonuclariComponent } from './anket-sonuclari.component';

describe('AnketSonuclariComponent', () => {
  let component: AnketSonuclariComponent;
  let fixture: ComponentFixture<AnketSonuclariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnketSonuclariComponent]
    });
    fixture = TestBed.createComponent(AnketSonuclariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
