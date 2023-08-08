import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardValeursComponent } from './mini-card-valeurs.component';

describe('MiniCardValeursComponent', () => {
  let component: MiniCardValeursComponent;
  let fixture: ComponentFixture<MiniCardValeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCardValeursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCardValeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
