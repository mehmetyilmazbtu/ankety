import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketGonderComponent } from './anket-gonder.component';

describe('AnketGonderComponent', () => {
  let component: AnketGonderComponent;
  let fixture: ComponentFixture<AnketGonderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnketGonderComponent]
    });
    fixture = TestBed.createComponent(AnketGonderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
