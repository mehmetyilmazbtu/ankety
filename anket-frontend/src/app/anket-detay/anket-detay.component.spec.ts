import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketDetayComponent } from './anket-detay.component';

describe('AnketDetayComponent', () => {
  let component: AnketDetayComponent;
  let fixture: ComponentFixture<AnketDetayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnketDetayComponent]
    });
    fixture = TestBed.createComponent(AnketDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
