import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Block16Component } from './block16.component';

describe('Block16Component', () => {
  let component: Block16Component;
  let fixture: ComponentFixture<Block16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Block16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Block16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
