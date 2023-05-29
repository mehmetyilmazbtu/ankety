import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketSayfasiComponent } from './anket-sayfasi.component';

describe('AnketSayfasiComponent', () => {
  let component: AnketSayfasiComponent;
  let fixture: ComponentFixture<AnketSayfasiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnketSayfasiComponent]
    });
    fixture = TestBed.createComponent(AnketSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
